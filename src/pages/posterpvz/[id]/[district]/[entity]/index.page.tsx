import type { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { BreadCrumb } from "@/components/BreadCrumb";
import { PageLayout } from "@/layouts/PageLayout";
import { filterCategoriesPVZ } from "@/pages/posterpvz/const";
import { Routes } from "@/shared/constants";
import { LeftMediaJk } from "@/view/LeftMediaJK";

export default function IndexPage({ district, id, entity }: InferGetStaticPropsType<typeof getStaticProps>) {
    const items = [
        { label: "Реклама для ПВЗ", url: Routes.POSTERPVZ },
        { label: filterCategoriesPVZ[+id], url: `${Routes.POSTERPVZ}/${id}` },
        { label: ` ${filterCategoriesPVZ[+id]} район`, url: `${Routes.POSTERPVZ}/${id}/${district}` },
        { label: ` ${filterCategoriesPVZ[+id]} жк` },
    ];

    return (
        <PageLayout>
            <BreadCrumb model={items} />
            <LeftMediaJk />
        </PageLayout>
    );
}

export const getStaticPaths = () => {
    const ids = Array(filterCategoriesPVZ.length)
        .fill(0)
        .map((_, i) => i.toString());
    const districts = ["0", "1", "2", "3", "4", "5", "6", "7"];
    const entities = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const combinedArray = districts.flatMap((district) =>
        ids.flatMap((id) =>
            entities.map((entity) => ({
                district,
                id,
                entity,
            })),
        ),
    );

    return {
        paths: combinedArray.map((item) => ({
            params: {
                district: item.district,
                id: item.id,
                entity: item.entity,
            },
        })),
        fallback: false,
    };
};

export const getStaticProps = ((ctx: GetStaticPropsContext) => {
    const district = ctx?.params?.district as string;
    const id = ctx?.params?.id as string;
    const entity = ctx?.params?.entity as string;

    return {
        props: {
            district,
            id,
            entity,
        },
    };
}) satisfies GetStaticProps<{ district: string; id: string; entity: string }>;
