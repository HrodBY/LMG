import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { BreadCrumb } from "@/components/BreadCrumb";
import type { GetCategoryDto, GetPortfolioDto } from "@/entities/types/entities";
import { PageLayout } from "@/layouts/PageLayout";
import Build from "@/shared/assests/posterpvz.png";
import { Routes } from "@/shared/constants";
import { API_BASE } from "@/shared/constants/private";
import { BuildingPage } from "@/view/Building/Building";

export default function IndexPage({ port, cat }: InferGetStaticPropsType<typeof getStaticProps>) {
    const items = [{ label: "Реклама для ПВЗ" }];
    const filterCategory = cat.map((el) => el.title);
    const filterPort = port.filter((el) => filterCategory.includes(el.categoryId || ""));

    return (
        <PageLayout>
            <BreadCrumb model={items} />
            <BuildingPage
                listCategory={cat}
                port={filterPort || []}
                alt="PVZ"
                src={Build}
                url={Routes.POSTERPVZ}
                title="Реклама для ПВЗ: Как привлечь клиентов?"
                description="Привлекайте аудиторию прямо на месте выдачи.
                    Эффективное решение для продвижения услуг и товаров среди ваших клиентов в пункте выдачи заказов."
            />
        </PageLayout>
    );
}
export const getStaticProps = (async () => {
    const resPort = await axios<GetPortfolioDto[]>(`${API_BASE}/portfolio`);
    const resCat = await axios<GetCategoryDto[]>(`${API_BASE}/category`, {
        params: { sectionId: "b2d9bcfb-211a-4103-ba93-56eed386da97" },
    });

    const port = resPort.data;
    const cat = resCat.data;

    return {
        props: {
            port,
            cat,
        },
    };
}) satisfies GetStaticProps<{ port: GetPortfolioDto[]; cat: GetCategoryDto[] }>;
