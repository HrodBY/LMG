import { BreadCrumb } from "@/components/BreadCrumb";
import { PageLayout } from "@/layouts/PageLayout";
import { BuildingPage } from "@/view/Building/Building";

export default function Building() {
    const items = [{ label: "Реклама в жилых домах" }];

    return (
        <PageLayout>
            <BreadCrumb model={items} />
            <BuildingPage
                title="Реклама в жилых домах"
                description="Достигайте своей аудитории там, где она живет.Эффективное решение для продвижения ваших услуг и товаров среди жителей."
            />
        </PageLayout>
    );
}
