export const load = async ({ fetch }) => {
    const res = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
    const { joke } = await res.json();

    return { joke };
};