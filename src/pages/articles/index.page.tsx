import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { BreadCrumb } from "@/components/BreadCrumb";
import type { CreateNewsDto } from "@/entities/types/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { Routes } from "@/shared/constants";
import { API_BASE } from "@/shared/constants/private";
import { Articles } from "@/view/Articles";

export default function ArticlesPage({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
    const items = [{ label: "Статья" }];

    return (
        <PageLayout>
            <BreadCrumb model={items} />
            <Articles url={Routes.ARTICLES} listArticles={articles.length ? articles : []} />
        </PageLayout>
    );
}
export const getStaticProps = (async () => {
    const resPromotion = await axios<CreateNewsDto[]>(`${API_BASE}/article`);
    const articles = resPromotion.data;

    return {
        props: {
            articles,
        },
    };
}) satisfies GetStaticProps<{ articles: CreateNewsDto[] }>;
