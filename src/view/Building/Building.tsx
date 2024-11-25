import cnBind from "classnames/bind";
import type { StaticImageData } from "next/image";
import { useRouter } from "next/router";

import { FormFeedback } from "@/components/_Forms/FormFeedback";
import { ModalFeedBack } from "@/components/_Modals/ModalFeedBack";
import { MapWrapper } from "@/components/Map";
import type { GetCategoryDto, GetPortfolioDto } from "@/entities/types/entities";
import { Routes } from "@/shared/constants";
import { useBooleanState } from "@/shared/hooks";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { Card } from "@/view/Building/components/Card";
import { CaseBlock } from "@/view/Main/component/CaseBlock";

import styles from "./Building.module.scss";

const cx = cnBind.bind(styles);
type Props = {
    title?: string;
    description?: string;
    src: StaticImageData;
    alt: string;
    port: GetPortfolioDto[];
    listCategory: GetCategoryDto[];
    url?: string;
};
export const BuildingPage = ({ description, title, port, src, alt, listCategory, url = Routes.BUILDING }: Props) => {
    const [isOpen, open, close] = useBooleanState(false);

    const href = useRouter();

    return (
        <div className={cx("building")}>
            <div className={cx("main-block")}>
                <CustomImage src={src} alt={alt} />
                <div className={cx("wrapper", "container")}>
                    <div className={cx("content")}>
                        <h1>{title}</h1>
                        <span>{description}</span>
                        <Button className={cx("button-main")} mode="empty" onClick={open} label="Заказать звонок" />
                    </div>
                </div>
                <ModalFeedBack isOpen={isOpen} onClose={close} />
            </div>
            <div className={cx("cards-container")}>
                <div className={cx("cards-wrapper", "container")}>
                    <h2>Варианты размещения рекламы</h2>
                    <div className={cx("cards")}>
                        {listCategory.map((el, index) => (
                            <Card onClick={() => href.push(`${url}/${el.id}`)} key={index} data={el} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx("wrapper-map", "container")}>
                <div className={cx("header")}>
                    <h3>Доступные локации</h3>
                    <Button className={cx("button")} mode="empty" onClick={open} label="Заказать звонок" />
                </div>
                <div className={cx("map-content")}>
                    <MapWrapper />
                </div>
            </div>
            <div className={cx("portfolio")}>
                {port.length !== 0 && <CaseBlock className={cx("case-block")} listItem={port.slice(-4)} />}
            </div>
            <div className={cx("form")}>
                <FormFeedback />
            </div>
        </div>
    );
};
