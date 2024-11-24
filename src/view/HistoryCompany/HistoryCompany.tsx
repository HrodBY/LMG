import { useState } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";
import { Carousel } from "primereact/carousel";

import { FormFeedback } from "@/components/_Forms/FormFeedback";
import { SwipeableWrapper } from "@/components/SwipeableWrapper";
import auth from "@/shared/assests/photo_2023-03-08_21-16-20 2.png";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { HISTORY_COMPANY, responsiveOptions } from "@/view/HistoryCompany/const";

import styles from "./HistoryCompany.module.scss";

const cx = cnBind.bind(styles);
type Props = {};
const FeedbackCard = (item: { type: string; src: string }) => {
    return (
        <div className={cx("card", { video: item.type === "video" })}>
            <CustomImage className={cx("image")} width={282} height={282} src={item.src} alt={item.src} />
            <div className={cx("info")}>
                <span className={cx("name")}>Менеджер</span>
                <span className={cx("post")}>Менеджер</span>
            </div>
        </div>
    );
};
export const HistoryCompanyPage = ({}: Props) => {
    const [page, setPage] = useState(0);

    const onPageChange = (e: number) => setPage(e);

    return (
        <div className={cx("history-company")}>
            <div className={cx("wrapper")}>
                <div className={cx("header", "container")}>
                    <h1 className={cx("title")}>О компании</h1>
                    <div className={cx("text")}>
                        <CustomImage className={cx("image")} width={391} height={391} src={auth} alt="history" />
                        <div className={cx("description")}>
                            <div className={cx("list-text")}>
                                <span>
                                    Lift Media Group – лидер рынка по размещению рекламы в жилых домах и бизнес -
                                    центрах г. Санкт-Петербург.
                                </span>
                                <span>
                                    Мы специализируемся на установке рекламных конструкций и дальнейшем размещении
                                    рекламы в жилых домах, бизнес и торговых центрах, спортивных клубах, ретейле и
                                    пунктах выдачи заказов.
                                </span>
                                <span>Наши профильные продукты - стенды в лифтах и digital экраны в ЖК.</span>
                            </div>
                            <div className={cx("author")}>
                                <span>Егор Иваков</span>
                                <svg
                                    width="80"
                                    height="48"
                                    viewBox="0 0 80 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.00182506 34.0879C0.516759 27.3869 2.74315 20.8175 6.23943 15.0554C7.99648 12.1773 10.0612 9.48152 12.4272 7.07858C13.0333 6.49438 13.6251 5.892 14.2462 5.32305C14.8851 4.77445 15.509 4.20624 16.1628 3.67508C16.8316 3.16354 17.4932 2.63965 18.1798 2.15281L19.2282 1.44725L19.7524 1.09484L20.0145 0.918997C20.1092 0.858687 20.2374 0.780939 20.3506 0.719176C22.1924 -0.318441 24.8369 -0.366398 26.6224 1.46396C27.0576 1.90357 27.3603 2.43183 27.5861 2.95064C27.6886 3.2115 27.7883 3.47599 27.8481 3.73321C27.9251 3.9948 27.9664 4.24765 28.0091 4.50269C28.1665 5.51779 28.1216 6.46094 28.0291 7.37213C27.982 7.82699 27.9094 8.27387 27.8311 8.70912L27.5917 9.93783C27.4386 10.7582 27.2591 11.5735 27.0832 12.3895C26.73 14.0207 26.3297 15.6411 25.9102 17.2549C24.2009 23.7044 21.9374 30.0006 19.1377 36.0374L18.0658 38.2899C17.6905 39.0318 17.3244 39.7788 16.9419 40.5163L16.3608 41.6193L16.0702 42.1708L15.7504 42.7463C15.3074 43.5121 14.8131 44.2555 14.2369 44.9625C13.6586 45.6666 13.0041 46.3438 12.1886 46.9127C11.3809 47.4752 10.3618 47.9322 9.23146 47.9882C8.95156 48.0172 8.67166 47.9874 8.39247 47.9569C8.109 47.9416 7.84976 47.8479 7.58055 47.7832C7.04638 47.6365 6.53999 47.372 6.09556 47.0508C5.19959 46.4026 4.55646 45.5053 4.15762 44.5389C3.77302 43.5841 3.60423 42.5872 3.5971 41.6178C3.58571 40.6485 3.72816 39.7264 3.92259 38.8559C4.12201 37.9833 4.36915 37.1665 4.64193 36.3673L5.04434 35.1611L5.49731 33.9745C6.71235 30.8122 8.31983 27.8215 10.1972 25.0312C12.0682 22.2337 14.2775 19.6826 16.7105 17.3886L17.1649 16.9563L17.6385 16.5457L18.5872 15.7276C18.9098 15.4631 19.2417 15.2095 19.5686 14.9508C19.8976 14.695 20.2196 14.4291 20.5643 14.1937C21.243 13.7097 21.9147 13.2156 22.624 12.7782L23.1489 12.4403L23.411 12.2718C23.458 12.2427 23.4915 12.218 23.5492 12.1846L23.7223 12.0857C24.1895 11.835 24.7001 11.6672 25.2279 11.6105C26.2777 11.4841 27.4123 11.8031 28.2292 12.5631C28.6501 12.9417 28.987 13.4837 29.1401 14.0418C29.3018 14.602 29.2961 15.1405 29.2491 15.6258C29.1985 16.1134 29.0967 16.5588 28.9877 16.9795L28.6587 18.1806L28.0034 20.561C27.1366 23.7364 26.235 26.903 25.3518 30.074L25.3497 30.0813L23.9851 29.8328C24.0869 28.7653 24.3682 27.6878 24.9459 26.7199C25.24 26.2396 25.5982 25.7949 26.0498 25.4243C26.5013 25.048 27.0248 24.7849 27.5768 24.6178C28.1316 24.4594 28.7242 24.402 29.3182 24.5022C29.6137 24.5517 29.9093 24.636 30.1878 24.7697C30.3295 24.83 30.462 24.9128 30.5945 24.9927L30.8694 25.1693C31.5374 25.553 32.3707 25.6249 33.0559 25.3168C33.229 25.2463 33.3878 25.1453 33.5388 25.0341C33.61 24.9731 33.6869 24.9186 33.751 24.8481L33.855 24.7457L33.9789 24.6105L34.9732 23.5286L36.9617 21.3647L38.9502 19.2008L39.9445 18.1189C40.1888 17.8566 40.5392 17.6255 40.9288 17.5456C41.3183 17.4613 41.7229 17.5172 42.0669 17.6771C42.4123 17.8362 42.71 18.0971 42.9137 18.4371C43.1181 18.7757 43.2064 19.2023 43.1601 19.5917C43.1551 19.692 43.1338 19.7843 43.1081 19.8758C43.0854 19.9623 43.054 20.0757 43.0369 20.1171L42.918 20.4586L42.6922 21.146C42.4002 22.0652 42.1538 22.9996 41.9472 23.9428C41.7428 24.8866 41.5804 25.84 41.4636 26.7984C41.4508 26.9161 41.433 27.0425 41.4237 27.1537L41.4152 27.4465C41.4031 27.5453 41.4202 27.6398 41.4337 27.7343C41.4515 27.8273 41.4437 27.9276 41.4786 28.0162C41.5576 28.389 41.7521 28.7225 41.9907 29.0146C42.2293 29.311 42.5604 29.5283 42.908 29.6787C43.0804 29.7652 43.2684 29.7971 43.4521 29.8458C43.6402 29.8625 43.8275 29.8916 44.0141 29.8676C44.3844 29.8378 44.7534 29.739 45.0689 29.5239L45.1921 29.4535L45.3025 29.3597L45.5268 29.173L46.0403 28.66C47.4078 27.2896 48.7169 25.8574 49.959 24.3671C52.4389 21.3829 54.6589 18.1741 56.5805 14.7888L57.2849 13.5099L57.6246 12.8639L57.7948 12.5406L57.8375 12.4599C57.8397 12.4505 57.8354 12.4556 57.8354 12.4556C57.8432 12.4527 57.8318 12.4629 57.8361 12.4708C57.834 12.5253 57.8575 12.5362 57.8518 12.5311C57.8518 12.5311 57.8617 12.5384 57.8838 12.5362C57.9045 12.5319 57.933 12.5261 57.933 12.5217C57.933 12.5217 57.9337 12.521 57.9301 12.5217L57.8689 12.5849L57.7464 12.7114C57.6638 12.7949 57.584 12.8814 57.5049 12.9686C57.3447 13.1401 57.1908 13.3188 57.037 13.4968C56.4295 14.2162 55.8768 14.9857 55.3904 15.7966C55.1468 16.2021 54.9189 16.6169 54.7066 17.0406C54.6019 17.2527 54.4994 17.4664 54.4025 17.6829L54.2601 18.0084L54.1895 18.1719L54.1433 18.318C53.8669 19.0838 53.8626 19.9289 54.2059 20.6555C54.5407 21.377 55.1518 21.9911 55.8953 22.2657C56.2578 22.4299 56.6545 22.4634 57.0413 22.4743C57.428 22.4365 57.8204 22.3733 58.1801 22.1843L58.4536 22.0564L58.7613 21.8741C58.9657 21.7505 59.1744 21.6335 59.3752 21.5042C59.7826 21.2535 60.1836 20.9927 60.581 20.7267C63.7554 18.5883 66.5978 15.9376 68.9617 12.901L68.9631 12.8995C69.2017 12.5929 69.639 12.5413 69.9403 12.7855C70.2408 13.0289 70.2914 13.475 70.0528 13.7824C67.5949 16.9403 64.6435 19.6913 61.3481 21.9111C60.9357 22.188 60.519 22.4583 60.0967 22.7184C59.888 22.8528 59.6715 22.9749 59.4593 23.1028L59.1388 23.2924L58.7535 23.4777C58.2442 23.7357 57.6645 23.849 57.0897 23.8926C56.5135 23.889 55.9259 23.8207 55.3946 23.5889C54.3121 23.1784 53.436 22.3122 52.9446 21.2499C52.4403 20.1868 52.4432 18.8978 52.8413 17.8217L52.9104 17.6168L52.9859 17.4402L53.1397 17.0893C53.2444 16.856 53.3548 16.6257 53.4681 16.3961C53.6974 15.939 53.9431 15.4914 54.2059 15.054C54.7315 14.1791 55.3284 13.3479 55.9858 12.5689C56.1517 12.3756 56.3184 12.1831 56.4922 11.9964C56.5776 11.9019 56.6645 11.8089 56.7535 11.7181L56.886 11.5807L56.9522 11.5124C56.995 11.4732 57.0427 11.4318 57.089 11.394C57.2806 11.2443 57.5398 11.128 57.8055 11.1193C58.069 11.1055 58.3211 11.1738 58.5334 11.2944C58.9514 11.527 59.2648 12.0262 59.2228 12.5784C59.21 12.707 59.1858 12.8436 59.1395 12.954C59.1181 13.0093 59.0918 13.0718 59.0697 13.119L59.0262 13.2018L58.8525 13.5317L58.5049 14.1922L57.7848 15.4994C55.8212 18.9589 53.5528 22.2374 51.0187 25.2863C49.7503 26.8093 48.4127 28.2727 47.0147 29.6729L46.4898 30.1975L46.1536 30.4824L45.9819 30.6219L45.7911 30.7374C45.2939 31.0673 44.6971 31.2402 44.1074 31.2838C43.8097 31.3151 43.5148 31.2802 43.2207 31.2453C42.9336 31.1785 42.6431 31.116 42.3753 30.9895C41.8361 30.757 41.3312 30.417 40.9466 29.9519C40.5634 29.4934 40.2578 28.947 40.1268 28.3497C40.0784 28.2044 40.0777 28.0511 40.0527 27.9021C40.0335 27.7517 40.0128 27.6013 40.0249 27.4523L40.0413 27.004L40.0841 26.6233C40.2059 25.6198 40.3761 24.6229 40.5897 23.6354C40.8055 22.6486 41.0634 21.6713 41.3689 20.71L41.6046 19.9914L41.7293 19.6339C41.7571 19.5605 41.7514 19.5525 41.7613 19.5198C41.7706 19.4922 41.7799 19.4646 41.7763 19.4406C41.7884 19.3403 41.7713 19.2568 41.7229 19.1718C41.6737 19.0889 41.5883 19.0126 41.4921 18.969C41.2856 18.8862 41.1332 18.916 40.958 19.0889L39.9637 20.1709L37.9752 22.3347L35.9867 24.4986L34.9924 25.5806L34.8685 25.7157L34.7125 25.8727C34.6092 25.9817 34.4896 26.0732 34.3735 26.1684C34.1335 26.3486 33.8757 26.5077 33.5993 26.6225C32.4968 27.113 31.2013 26.9924 30.1842 26.4046L29.8431 26.188C29.7662 26.1444 29.6935 26.0943 29.6102 26.0609C29.4506 25.9824 29.2747 25.933 29.0931 25.9025C28.7292 25.8392 28.3346 25.8741 27.9578 25.9817C27.1929 26.2011 26.5662 26.7315 26.1281 27.4625C25.6937 28.1877 25.4515 29.0669 25.3682 29.9636L24.0036 29.715L24.005 29.7078C24.787 26.5092 25.5505 23.3055 26.3489 20.1113L26.9429 17.7141L27.2356 16.5261C27.324 16.1483 27.393 15.7857 27.418 15.4522C27.4422 15.1201 27.4265 14.8164 27.3475 14.5868C27.2705 14.355 27.1544 14.1784 26.9671 14.0142C26.5747 13.6683 26.0113 13.5157 25.4622 13.5986C25.1873 13.6349 24.9174 13.7337 24.6745 13.8732L24.5848 13.9277L24.4672 14.0069L24.2215 14.1748L23.7301 14.5098C23.0663 14.9435 22.4396 15.4318 21.8057 15.9085C21.4838 16.1403 21.1846 16.4026 20.8777 16.654C20.5735 16.909 20.2644 17.1575 19.9639 17.417L19.0829 18.2191L18.6413 18.6188L18.2161 19.0366C15.9406 21.2535 13.8815 23.7081 12.1523 26.3871C10.4159 29.0582 8.94088 31.9102 7.84478 34.9068L7.43525 36.0308L7.07558 37.1716C6.82772 37.9324 6.61264 38.6968 6.45738 39.4329C6.13759 40.905 6.12691 42.3183 6.61762 43.4685C6.85337 44.0142 7.21874 44.4836 7.65105 44.7816C7.86828 44.9305 8.09334 45.0475 8.34262 45.1042C8.59403 45.1696 8.83761 45.2095 9.08404 45.1841C9.57262 45.1558 10.0975 44.9472 10.6167 44.581C11.1352 44.2155 11.6295 43.7098 12.0818 43.1481C12.534 42.5835 12.9471 41.9565 13.3189 41.2996L13.5924 40.7975L13.8709 40.2576L14.4285 39.1779C14.796 38.4556 15.1464 37.7253 15.5061 36.9994L16.5331 34.7956C19.199 28.8852 21.394 22.7533 23.0421 16.4695C23.4466 14.897 23.8319 13.3188 24.1717 11.7304C24.3405 10.9362 24.5135 10.1427 24.6603 9.34346L24.8903 8.14672C24.9565 7.77105 25.0149 7.40411 25.0513 7.03934C25.1246 6.3149 25.146 5.59409 25.0434 4.97936C24.943 4.36173 24.7464 3.86546 24.4665 3.58789C24.3376 3.43021 24.1596 3.33212 23.9616 3.22676C23.7379 3.14392 23.5129 3.05673 23.2636 3.04583C22.7736 3.00078 22.233 3.11848 21.7487 3.38298C21.6839 3.41785 21.6376 3.44474 21.5614 3.4927L21.3171 3.65546L20.8278 3.98026L19.8485 4.6284C19.204 5.07382 18.5929 5.56792 17.9561 6.02715C17.3372 6.50962 16.7454 7.02917 16.1371 7.52763C15.5467 8.04789 14.9833 8.60012 14.4036 9.13418C12.158 11.3497 10.1239 13.8035 8.3768 16.4636C4.86628 21.7745 2.45043 27.8665 1.37997 34.2615C1.31587 34.6481 0.956908 34.9089 0.578007 34.8435C0.223323 34.7818 -0.0238148 34.449 0.00182506 34.0879Z"
                                        fill="#040F16"
                                    />
                                    <path
                                        d="M72.3579 12.5189C72.1265 12.5189 71.9 12.4012 71.7682 12.1861C71.5645 11.854 71.6628 11.4159 71.9883 11.2081L78.9353 6.76842C79.2608 6.56061 79.6902 6.66087 79.8939 6.99293C80.0976 7.325 79.9993 7.76242 79.6738 7.97096L72.7276 12.4106C72.6122 12.484 72.484 12.5189 72.3579 12.5189Z"
                                        fill="#040F16"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("wrapper-history", "container")}>
                    <div className={cx("content")}>
                        {HISTORY_COMPANY.map((el, i) => (
                            <div key={i} className={cx("item")}>
                                <div className={cx("date")}>{el.date}</div>
                                <span className={cx("title")}>{el.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="team" className={cx("wrapper-carousel")}>
                    <h1 className={cx("title", "container", "wrapper")}>Наша команда</h1>
                    <div className={cx("carousel")}>
                        <SwipeableWrapper
                            onSwipedLeft={() => setPage((prevPage) => (prevPage + 1) % [].length)}
                            onSwipedRight={() => setPage((prevPage) => (prevPage - 1 + [].length) % [].length)}
                        >
                            <Carousel
                                itemTemplate={(item: { type: string; src: string }) => FeedbackCard(item)}
                                value={[]}
                                showIndicators={false}
                                showNavigators={false}
                                numVisible={10}
                                responsiveOptions={responsiveOptions}
                                className={cx("carousel")}
                                page={page}
                                onPageChange={(e) => onPageChange(e.page)}
                            />
                        </SwipeableWrapper>
                    </div>
                </div>
                <div className={cx("wrapper-documents", "container")}>
                    <h1>Перечень документов</h1>
                    <div className={cx("documents")}>
                        <span>Перечень для для начала работы</span>
                        <span>
                            Закон о рекламе регулирует рекламную деятельность, обеспечивая ее прозрачность и
                            добросовестность. Он направлен на защиту потребителей от недобросовестной и вводящей в
                            заблуждение рекламы, а также устанавливает требования для рекламодателей и
                            рекламораспространителей. В России основной правовой акт, регулирующий рекламную сферу, —
                            это Федеральный закон «О рекламе», принятый 13 марта 2006 года.
                        </span>
                        <div className={cx("list")}>
                            <span>Ссылка на документы</span>
                            <Link href="/">Документ 1</Link>
                            <Link href="/">Документ 2</Link>
                            <Button className={cx("download")} label="Скачать" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("form")}>
                <FormFeedback />
            </div>
        </div>
    );
};
