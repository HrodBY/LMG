import cnBind from "classnames/bind";

import type { GetCategoryDto } from "@/entities/types/entities";
import { API_BASE } from "@/shared/constants/private";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./Card.module.scss";

const cx = cnBind.bind(styles);

type Props = {
    data: GetCategoryDto;
    onClick?: () => void;
};
export const Card = ({ data, onClick }: Props) => {
    const { title, description, pictureId } = data;

    return (
        <div onClick={onClick} className={cx("card")}>
            <CustomImage
                className={cx("image")}
                width={382}
                height={250}
                src={`${API_BASE}/picture/${pictureId}`}
                alt="poster"
            />
            <div className={cx("text")}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};
