import type { ContentSatus, ItemDto, ListDto } from "@/entities/types/entities";
import { createAxiosApi } from "@/shared/axios/axios";

export type NewsCreateApiParams = {
    title?: string;
    subtitle?: string;
    time?: string;
    video?: string;
    status: ContentSatus;
    contentItems?: ItemDto[];
    list?: ListDto[];
    files?: File[];
    pictureName?: string;
};
export const newsCreateApi = async (params: NewsCreateApiParams): Promise<boolean> => {
    return createAxiosApi()<boolean>({
        type: "postForm",
        url: "/news/create",
        body: params,
    }).then(() => true);
};