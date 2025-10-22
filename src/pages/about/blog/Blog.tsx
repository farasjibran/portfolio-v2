import { FC } from "react";

import { ArticleTitle } from "pages/about/common/title/Title";

export const Blog: FC = () => {
    return (
        <>
            <ArticleTitle title="Blog" />
            <br />
            {/*{configs.about.blog.map((item) => (
                <Box py="2" key={item.id}>
                    <Link href={item.link} target="_blank" variant="link">
                        {item.title}
                    </Link>
                </Box>
            ))}*/}
        </>
    );
};
