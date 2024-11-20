import type { ContentSatus, ItemDto, ListDto } from "@/entities/types/entities";
import { createAxiosApi } from "@/shared/axios/axios";

export type NewsUpdateApiParams = {
    id?: string;
    title?: string;
    subtitle?: string;
    time?: string;
    video?: string;
    status: ContentSatus;
    contentItems?: ItemDto[];
    list?: ListDto[];
    pictureName?: string;
    files?: File[];
};
export const newsUpdateApi = async ({ ...params }: NewsUpdateApiParams): Promise<boolean> => {
    return createAxiosApi()<boolean>({
        type: "postForm",
        url: `/news/update`,
        body: params,
    }).then(() => true);
};
