export async function getHearts() {
    console.log("하트 가져오기");

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/heart`,
        {
            method: "post",
            next: {
                tags: ["posts", "heart"],
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
