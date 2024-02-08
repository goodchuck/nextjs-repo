export async function getActions() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/actions`,
        {
            next: {
                tags: ["posts", "actions"],
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
