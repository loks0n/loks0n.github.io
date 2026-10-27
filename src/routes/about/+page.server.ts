import { projects } from "#lib/content.ts";

export const prerender = true;

/** Last year of GitHub contribution levels (0-4), one array of seven days per week, -1 before the first day. Empty if GitHub is unreachable. */
async function contributions(fetch: typeof globalThis.fetch): Promise<number[][]> {
  try {
    const html = await (await fetch("https://github.com/users/loks0n/contributions")).text();
    const days = [...html.matchAll(/data-date="([\d-]+)"[^>]*data-level="(\d)"/g)]
      .map(([, date, level]) => ({ date, level: Number(level) }))
      .sort((a, b) => a.date.localeCompare(b.date));
    const weeks: number[][] = [];
    for (const { date, level } of days) {
      const weekday = new Date(date).getUTCDay();
      if (!weeks.length) weeks.push(Array(weekday).fill(-1));
      else if (weekday === 0) weeks.push([]);
      weeks[weeks.length - 1].push(level);
    }
    return weeks;
  } catch {
    return [];
  }
}

export const load = async ({ fetch }) => ({
  work: projects.list().filter((p) => p.employer === "Appwrite"),
  weeks: await contributions(fetch),
});
