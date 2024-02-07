

type Props = {
    params: { username: string }
}

export async function generateMetadata({ params }: Props) {
    // const user: User = await getUserServer({ queryKey: ["users", params.username] });
    return {
        title: `연습용 / Z`,
        description: `프로필`,
    }
}

export default async function Page() {
    return (
        <>
            트위터 페이지에요
        </>
    )
}