import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { BreadCrumb } from "@/components/BreadCrumb";
import type { GetCategoryDto, GetPortfolioDto } from "@/entities/types/entities";
import { PageLayout } from "@/layouts/PageLayout";
import Build from "@/shared/assests/postertrc.png";
import { Routes } from "@/shared/constants";
import { API_BASE } from "@/shared/constants/private";
import { BuildingPage } from "@/view/Building/Building";

export default function Building({ port, cat }: InferGetStaticPropsType<typeof getStaticProps>) {
    const items = [{ label: "Реклама в торговых центрах" }];
    const filterCategory = cat.map((el) => el.title);
    const filterPort = port.filter((el) => filterCategory.includes(el.categoryId || ""));

    return (
        <PageLayout>
            <BreadCrumb model={items} />
            <BuildingPage
                listCategory={cat}
                port={filterPort || []}
                alt="TC"
                src={Build}
                url={Routes.POSTERTC}
                title="Реклама в торговых центрах"
                description="Охватывайте клиентов в популярной локации для покупок.
                    Эффективное решение для продвижения ваших услуг и товаров среди посетителей торговых центров."
            />
        </PageLayout>
    );
}
export const getStaticProps = (async () => {
    const resPort = await axios<GetPortfolioDto[]>(`${API_BASE}/portfolio`);
    const resCat = await axios<GetCategoryDto[]>(`${API_BASE}/category`, {
        params: { sectionId: "5bac48d6-281e-4408-ab8a-418e7ce45907" },
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
