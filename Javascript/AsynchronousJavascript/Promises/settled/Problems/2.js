
// ⚔️ Challenge 2 — Retry Failed Jobs Automatically
// You’ll extend your previous logic:
// If any job fails, it should be retried once automatically.
// If it succeeds on retry → count as success.
// If it fails again → stay failed.
function job(id) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 900) + 100;
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve(`Job ${id} success`)
                : reject({ value: `Job ${id} failed`, id });
        }, time);
    });
}

const start = Date.now();

Promise.allSettled([
    job(1),
    job(2),
    job(3),
    job(4),
    job(5)
]).then((results) => {
    const result = results.reduce(async (acc, result) => {
        if (result.status === 'fulfilled') acc.success++;
        else {
            acc.retry++;
            const retriedResult = await job(result.value.id);
            if (retriedResult.status === 'fulfilled') acc.success++;
            else acc.failure++
        }
        return acc;
    }, { success: 0, failure: 0, retry: 0, time: Date.now() - start })
    console.log(result);
})

