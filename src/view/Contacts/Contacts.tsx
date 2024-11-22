import cnBind from "classnames/bind";
import { useFormik } from "formik";

import { Button } from "@/shared/ui/Button";
import { CheckBox } from "@/shared/ui/CheckBox";
import { TextField } from "@/shared/ui/TextField";

import styles from "./Contacts.module.scss";

const cx = cnBind.bind(styles);

export const Contacts = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            policy: false,
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className={cx("wrapper")}>
            <div className={cx("map")}>
                <div className={cx("social")}>
                    <div className={cx("social-item")}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#50575C" />
                            <path
                                d="M26.0009 12.4814C24.4096 10.8901 22.2513 9.99609 20.0009 9.99609C17.7505 9.99609 15.5922 10.8901 14.0009 12.4814C12.4096 14.0727 11.5156 16.2309 11.5156 18.4814C11.5156 20.7318 12.4096 22.8901 14.0009 24.4814L19.2709 29.7614C19.3639 29.8551 19.4745 29.9295 19.5963 29.9803C19.7182 30.031 19.8489 30.0572 19.9809 30.0572C20.1129 30.0572 20.2436 30.031 20.3655 29.9803C20.4873 29.9295 20.5979 29.8551 20.6909 29.7614L26.0009 24.4314C27.5856 22.8467 28.4758 20.6974 28.4758 18.4564C28.4758 16.2153 27.5856 14.0661 26.0009 12.4814ZM24.5709 23.0014L20.0009 27.5914L15.4309 23.0014C14.5281 22.0977 13.9134 20.9466 13.6646 19.6937C13.4158 18.4407 13.5441 17.1421 14.0332 15.9621C14.5223 14.782 15.3503 13.7734 16.4125 13.0639C17.4748 12.3543 18.7235 11.9756 20.0009 11.9756C21.2783 11.9756 22.5271 12.3543 23.5893 13.0639C24.6515 13.7734 25.4795 14.782 25.9686 15.9621C26.4577 17.1421 26.586 18.4407 26.3372 19.6937C26.0884 20.9466 25.4738 22.0977 24.5709 23.0014ZM17.0009 15.4114C16.1936 16.2211 15.7403 17.3179 15.7403 18.4614C15.7403 19.6048 16.1936 20.7016 17.0009 21.5114C17.6007 22.1122 18.3645 22.5225 19.1966 22.6908C20.0286 22.8591 20.8919 22.778 21.678 22.4575C22.4641 22.1371 23.1381 21.5917 23.6154 20.8896C24.0927 20.1876 24.352 19.3602 24.3609 18.5114C24.3654 17.9446 24.2562 17.3826 24.0398 16.8588C23.8234 16.3349 23.5041 15.8597 23.1009 15.4614C22.7046 15.056 22.232 14.7329 21.7103 14.5108C21.1887 14.2888 20.6282 14.1721 20.0613 14.1674C19.4944 14.1628 18.9321 14.2703 18.4069 14.4838C17.8816 14.6973 17.4038 15.0125 17.0009 15.4114ZM21.6909 20.0914C21.3119 20.4761 20.8111 20.7173 20.274 20.7736C19.7369 20.83 19.197 20.698 18.7464 20.4003C18.2959 20.1026 17.9627 19.6576 17.8039 19.1415C17.6451 18.6253 17.6706 18.07 17.8759 17.5705C18.0812 17.071 18.4536 16.6584 18.9295 16.4031C19.4054 16.1478 19.9552 16.0658 20.4848 16.171C21.0145 16.2762 21.4912 16.5621 21.8334 16.9799C22.1756 17.3977 22.3621 17.9213 22.3609 18.4614C22.3464 19.0786 22.0874 19.6649 21.6409 20.0914H21.6909Z"
                                fill="white"
                            />
                        </svg>
                        <span>Ленинский проспект, 153, Санкт-Петербург</span>
                    </div>
                    <div className={cx("social-three")}>
                        <div className={cx("social-item")}>
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="40" height="40" rx="20" fill="#50575C" />
                                <path
                                    d="M28.4809 23.4883L26.8309 21.8383C26.3391 21.3504 25.6752 21.0753 24.9824 21.0724C24.2896 21.0694 23.6234 21.3388 23.1274 21.8225C22.8628 22.0887 22.5136 22.2543 22.1401 22.2908C21.7665 22.3274 21.3919 22.2326 21.0807 22.0228C19.8523 21.203 18.7971 20.1498 17.9749 18.923C17.7688 18.6083 17.6774 18.2322 17.7162 17.858C17.755 17.4839 17.9216 17.1345 18.1879 16.8688C18.6672 16.3723 18.9332 15.708 18.9288 15.0179C18.9245 14.3279 18.6502 13.6669 18.1647 13.1765L16.5147 11.5265C16.0207 11.0342 15.3517 10.7578 14.6543 10.7578C13.9569 10.7578 13.2879 11.0342 12.7939 11.5265L12.3192 12.002C9.84416 14.477 10.0294 19.6805 15.1789 24.827C18.2839 27.9328 21.4092 29.2333 23.9434 29.2333C24.6894 29.2581 25.4329 29.1342 26.1305 28.8689C26.8282 28.6035 27.466 28.2019 28.0069 27.6875L28.4824 27.212C28.9756 26.7178 29.2525 26.0481 29.2522 25.3498C29.2519 24.6516 28.9745 23.9821 28.4809 23.4883ZM27.4204 26.1515L26.9449 26.627C24.9949 28.577 20.6907 28.2208 16.2379 23.7673C11.7852 19.3138 11.4282 15.0065 13.3782 13.0565L13.8499 12.5818C14.0623 12.3701 14.3499 12.2513 14.6498 12.2513C14.9496 12.2513 15.2373 12.3701 15.4497 12.5818L17.0997 14.2318C17.3082 14.4414 17.4266 14.7242 17.4295 15.0198C17.4325 15.3155 17.3197 15.6006 17.1154 15.8143C16.6086 16.3243 16.2925 16.993 16.22 17.7083C16.1475 18.4237 16.323 19.1422 16.7172 19.7435C17.6513 21.1415 18.8526 22.341 20.2519 23.273C20.8514 23.6672 21.5681 23.8438 22.2821 23.7732C22.9962 23.7027 23.6644 23.3892 24.1752 22.8853C24.3885 22.6785 24.6744 22.5637 24.9714 22.5655C25.2685 22.5674 25.5529 22.6857 25.7637 22.895L27.4137 24.545C27.52 24.6498 27.6046 24.7746 27.6625 24.9123C27.7204 25.0499 27.7506 25.1976 27.7512 25.3469C27.7518 25.4962 27.7229 25.6441 27.6662 25.7822C27.6094 25.9203 27.5259 26.0458 27.4204 26.1515Z"
                                    fill="white"
                                />
                            </svg>

                            <span>+7 (812) 982-00-58</span>
                        </div>
                        <div className={cx("social-icons")}>
                            <div className={cx("social-item", "icon")}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_4489_2832)">
                                        <path
                                            d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
                                            fill="#419FD9"
                                        />
                                        <path
                                            d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
                                            fill="url(#paint0_linear_4489_2832)"
                                        />
                                        <path
                                            d="M5.3937 11.7354C8.88335 10.1831 11.2103 9.15973 12.3747 8.66523C15.699 7.25348 16.3898 7.00823 16.84 7.00008C16.939 6.99838 17.1604 7.02343 17.3039 7.14223C17.425 7.24258 17.4583 7.37813 17.4742 7.47323C17.4901 7.56838 17.51 7.78508 17.4942 7.95438C17.3141 9.88698 16.5346 14.5769 16.138 16.7415C15.9702 17.6574 15.6398 17.9645 15.32 17.9945C14.6248 18.0598 14.0969 17.5255 13.4236 17.0748C12.37 16.3697 11.7749 15.9307 10.7522 15.2427C9.57035 14.4475 10.3365 14.0104 11.01 13.2961C11.1863 13.1092 14.2492 10.2647 14.3084 10.0067C14.3159 9.97443 14.3228 9.85413 14.2528 9.79063C14.1828 9.72713 14.0795 9.74883 14.0049 9.76608C13.8993 9.79058 12.2162 10.9264 8.95565 13.1736C8.4779 13.5086 8.0452 13.6717 7.6575 13.6632C7.2301 13.6538 6.40795 13.4165 5.79675 13.2136C5.0471 12.9648 4.45127 12.8333 4.50315 12.4107C4.53017 12.1906 4.82701 11.9655 5.3937 11.7354Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_4489_2832"
                                            x1="12"
                                            y1="0"
                                            x2="12"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#2AABEE" />
                                            <stop offset="1" stop-color="#229ED9" />
                                        </linearGradient>
                                        <clipPath id="clip0_4489_2832">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Telegram</span>
                            </div>
                            <div className={cx("social-item", "icon")}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_4489_2838)">
                                        <path
                                            d="M20.5019 3.48769C18.2457 1.23993 15.2457 0.00137141 12.0494 0C5.46299 0 0.102956 5.33475 0.100319 11.8919C0.0995518 13.9879 0.649635 16.034 1.6952 17.8375L0 24L6.33436 22.3464C8.0796 23.294 10.0446 23.7933 12.0443 23.7941H12.0494H12.0494C18.6348 23.7941 23.9957 18.4584 23.9984 11.9016C23.9995 8.72364 22.7577 5.73561 20.5019 3.48769ZM12.0494 21.7855H12.0456C10.2631 21.7846 8.51525 21.3081 6.99067 20.4075L6.62784 20.1933L2.8689 21.1745L3.87249 17.527L3.63609 17.1531C2.64185 15.5792 2.11698 13.7603 2.11772 11.8927C2.11991 6.44257 6.57497 2.00867 12.0532 2.00867C14.706 2.00976 17.1994 3.03926 19.0746 4.90753C20.9497 6.77579 21.9817 9.25937 21.9809 11.9007C21.9785 17.351 17.5233 21.7855 12.0494 21.7855Z"
                                            fill="#E0E0E0"
                                        />
                                        <path
                                            d="M0.548828 23.3172L2.16659 17.4362C1.16853 15.7151 0.643677 13.7624 0.644307 11.7625C0.646924 5.50497 5.76216 0.414062 12.0472 0.414062C15.0976 0.415434 17.9606 1.59735 20.1132 3.7425C22.2663 5.88762 23.4513 8.73896 23.4501 11.7714C23.4474 18.029 18.3319 23.1204 12.0476 23.1204C12.0472 23.1204 12.048 23.1204 12.0476 23.1204H12.0426C10.1342 23.1198 8.25913 22.6428 6.59372 21.7392L0.548828 23.3172Z"
                                            fill="url(#paint0_linear_4489_2838)"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.09668 6.84272C8.87561 6.35338 8.64286 6.34359 8.43254 6.33503C8.26051 6.32768 8.06357 6.32813 7.86695 6.32813C7.67017 6.32813 7.3504 6.40176 7.07998 6.69579C6.8094 6.98982 6.04688 7.70062 6.04688 9.14626C6.04688 10.5921 7.10458 11.989 7.25201 12.1852C7.39959 12.3812 9.29377 15.4427 12.2936 16.6204C14.7867 17.5993 15.2941 17.4046 15.8352 17.3556C16.3764 17.3066 17.5813 16.6449 17.8273 15.9588C18.0733 15.2727 18.0733 14.6847 17.9995 14.5618C17.9257 14.4393 17.7289 14.3659 17.4338 14.2189C17.1386 14.072 15.6876 13.361 15.4171 13.2631C15.1465 13.1651 14.9497 13.1161 14.7529 13.4103C14.5561 13.7042 13.9909 14.3659 13.8187 14.5618C13.6465 14.7582 13.4743 14.7826 13.1791 14.6357C12.884 14.4883 11.9334 14.1784 10.8058 13.1773C9.92839 12.3986 9.33604 11.4368 9.16386 11.1426C8.99167 10.8487 9.1454 10.6895 9.29346 10.543C9.42597 10.4114 9.58863 10.2 9.73622 10.0285C9.88349 9.85687 9.93268 9.73442 10.0311 9.5385C10.1295 9.34228 10.0803 9.17071 10.0065 9.02377C9.93268 8.87684 9.3591 7.42373 9.09668 6.84272Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M20.4052 3.45157C18.1749 1.22961 15.2094 0.00529725 12.0498 0.00390625C5.53895 0.00390625 0.240447 5.27741 0.23783 11.7593C0.237063 13.8313 0.780829 15.8538 1.81439 17.6366L0.138672 23.7284L6.40032 22.0937C8.12555 23.0304 10.068 23.524 12.0447 23.5248H12.0497H12.0498C18.5596 23.5248 23.8588 18.2504 23.8616 11.7688C23.8627 8.62741 22.6351 5.67369 20.4052 3.45157ZM12.0498 21.5393H12.046C10.284 21.5384 8.55616 21.0675 7.04909 20.1771L6.69042 19.9654L2.97463 20.9354L3.96669 17.3298L3.73301 16.9601C2.75018 15.4043 2.23133 13.6063 2.23209 11.7601C2.23424 6.37256 6.63815 1.98955 12.0535 1.98955C14.6759 1.99063 17.1406 3.00831 18.9944 4.85513C20.848 6.70195 21.868 9.15701 21.8672 11.7681C21.8649 17.1557 17.4608 21.5393 12.0498 21.5393Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_4489_2838"
                                            x1="11.9995"
                                            y1="23.3172"
                                            x2="11.9995"
                                            y2="0.414101"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#20B038" />
                                            <stop offset="1" stop-color="#60D66A" />
                                        </linearGradient>
                                        <clipPath id="clip0_4489_2838">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>WhatsApp</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("social-item")}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#50575C" />
                            <path
                                d="M21.0009 9.99894C18.6362 9.77185 16.268 10.394 14.3203 11.7539C12.3725 13.1138 10.9725 15.1226 10.3709 17.4207C9.76933 19.7187 10.0055 22.1559 11.0371 24.2957C12.0686 26.4356 13.8283 28.1383 16.0009 29.0989C17.2591 29.6679 18.6202 29.9742 20.0009 29.9989C22.1989 29.9991 24.3357 29.2751 26.0809 27.9389C26.2915 27.7783 26.4298 27.5407 26.4654 27.2782C26.501 27.0158 26.4311 26.7499 26.2709 26.5389C26.1913 26.4332 26.0915 26.3443 25.9773 26.2775C25.8631 26.2106 25.7367 26.1671 25.6056 26.1494C25.4744 26.1317 25.341 26.1403 25.2132 26.1745C25.0854 26.2088 24.9656 26.2681 24.8609 26.3489C23.8237 27.1323 22.6114 27.6512 21.3286 27.8608C20.0459 28.0703 18.7314 27.9641 17.4989 27.5514C16.2664 27.1387 15.153 26.4319 14.2551 25.4922C13.3571 24.5525 12.7017 23.4082 12.3454 22.1582C11.9891 20.9082 11.9428 19.5903 12.2104 18.3184C12.478 17.0465 13.0514 15.8589 13.8812 14.8585C14.7109 13.858 15.7719 13.0748 16.9723 12.5765C18.1728 12.0783 19.4766 11.88 20.7709 11.9989C22.7796 12.2314 24.6307 13.2006 25.9662 14.7189C27.3017 16.2373 28.0267 18.197 28.0009 20.2189V20.8989C27.9997 21.1287 27.9523 21.3558 27.8614 21.5668C27.7705 21.7778 27.6381 21.9683 27.4719 22.127C27.3058 22.2857 27.1094 22.4092 26.8944 22.4903C26.6795 22.5714 26.4504 22.6083 26.2209 22.5989C25.7631 22.5487 25.3414 22.3267 25.0408 21.9779C24.7401 21.629 24.5829 21.1791 24.6009 20.7189V16.3989C24.6009 16.1337 24.4955 15.8794 24.308 15.6918C24.1204 15.5043 23.8661 15.3989 23.6009 15.3989C23.3567 15.3969 23.1202 15.4842 22.936 15.6445C22.7518 15.8047 22.6326 16.0268 22.6009 16.2689C21.6702 15.3925 20.4392 14.9058 19.1609 14.9089C18.2921 14.9155 17.4394 15.1443 16.684 15.5736C15.9286 16.0029 15.2957 16.6184 14.8455 17.3615C14.3954 18.1046 14.1429 18.9506 14.1122 19.8189C14.0815 20.6872 14.2736 21.549 14.6702 22.322C15.0667 23.0951 15.6546 23.7538 16.3777 24.2353C17.1009 24.7169 17.9353 25.0054 18.8015 25.0732C19.6677 25.1411 20.5368 24.9861 21.3262 24.623C22.1155 24.2599 22.7988 23.7008 23.3109 22.9989C23.6011 23.448 23.9878 23.8267 24.4427 24.1076C24.8976 24.3886 25.4094 24.5646 25.9409 24.623C26.4724 24.6814 27.0102 24.6207 27.5153 24.4453C28.0203 24.2699 28.48 23.9842 28.8609 23.6089C29.2274 23.2602 29.5179 22.8394 29.7141 22.3731C29.9103 21.9067 30.0079 21.4048 30.0009 20.8989V20.2189C30.0232 17.7059 29.1171 15.2731 27.4562 13.387C25.7953 11.501 23.4966 10.2945 21.0009 9.99894ZM19.1809 23.0889C18.5697 23.0889 17.9723 22.9077 17.4642 22.5682C16.956 22.2286 16.56 21.7461 16.3261 21.1814C16.0922 20.6168 16.031 19.9955 16.1502 19.3961C16.2695 18.7967 16.5638 18.2461 16.9959 17.814C17.4281 17.3818 17.9786 17.0875 18.578 16.9683C19.1774 16.8491 19.7987 16.9103 20.3634 17.1442C20.928 17.378 21.4106 17.7741 21.7501 18.2822C22.0896 18.7904 22.2709 19.3878 22.2709 19.9989C22.2682 20.8176 21.9418 21.6021 21.3629 22.181C20.784 22.7599 19.9996 23.0863 19.1809 23.0889Z"
                                fill="white"
                            />
                        </svg>

                        <span>sales@liftmg.ru</span>
                    </div>
                </div>
                <div className={cx("form")}>
                    <div className={cx("header")}>
                        <h2>Задавайте вопросы</h2>
                        <span>
                            Если вы не нашли ответов на свои вопросы — напишите нам и мы ответим вам в ближайшее время
                        </span>
                    </div>
                    <form className={cx("form-wrapper")} onSubmit={formik.handleSubmit}>
                        <div className={cx("header")}>
                            <h2>Оставьте заявку</h2>
                        </div>
                        <div className={cx("form-content")}>
                            <div className={cx("inputs")}>
                                <TextField
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    name="name"
                                    placeholder="Имя"
                                    mode="light"
                                />
                                <TextField
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    name="phone"
                                    placeholder="Номер телефона*"
                                    mode="light"
                                />
                            </div>

                            <Button className={cx("button")} label="Отправить заявку" type="submit" />
                        </div>

                        <div className={cx("footer")}>
                            <CheckBox
                                checked={formik.values.policy}
                                onChange={formik.handleChange}
                                name="policy"
                                title="Согласен(а) на обработку персональных данных"
                            />
                            <div className={cx("decor")}>
                                <div className={cx("social-item", "icon")}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_4489_2832)">
                                            <path
                                                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
                                                fill="#419FD9"
                                            />
                                            <path
                                                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z"
                                                fill="url(#paint0_linear_4489_2832)"
                                            />
                                            <path
                                                d="M5.3937 11.7354C8.88335 10.1831 11.2103 9.15973 12.3747 8.66523C15.699 7.25348 16.3898 7.00823 16.84 7.00008C16.939 6.99838 17.1604 7.02343 17.3039 7.14223C17.425 7.24258 17.4583 7.37813 17.4742 7.47323C17.4901 7.56838 17.51 7.78508 17.4942 7.95438C17.3141 9.88698 16.5346 14.5769 16.138 16.7415C15.9702 17.6574 15.6398 17.9645 15.32 17.9945C14.6248 18.0598 14.0969 17.5255 13.4236 17.0748C12.37 16.3697 11.7749 15.9307 10.7522 15.2427C9.57035 14.4475 10.3365 14.0104 11.01 13.2961C11.1863 13.1092 14.2492 10.2647 14.3084 10.0067C14.3159 9.97443 14.3228 9.85413 14.2528 9.79063C14.1828 9.72713 14.0795 9.74883 14.0049 9.76608C13.8993 9.79058 12.2162 10.9264 8.95565 13.1736C8.4779 13.5086 8.0452 13.6717 7.6575 13.6632C7.2301 13.6538 6.40795 13.4165 5.79675 13.2136C5.0471 12.9648 4.45127 12.8333 4.50315 12.4107C4.53017 12.1906 4.82701 11.9655 5.3937 11.7354Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_4489_2832"
                                                x1="12"
                                                y1="0"
                                                x2="12"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#2AABEE" />
                                                <stop offset="1" stop-color="#229ED9" />
                                            </linearGradient>
                                            <clipPath id="clip0_4489_2832">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className={cx("social-item", "icon")}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_4489_2838)">
                                            <path
                                                d="M20.5019 3.48769C18.2457 1.23993 15.2457 0.00137141 12.0494 0C5.46299 0 0.102956 5.33475 0.100319 11.8919C0.0995518 13.9879 0.649635 16.034 1.6952 17.8375L0 24L6.33436 22.3464C8.0796 23.294 10.0446 23.7933 12.0443 23.7941H12.0494H12.0494C18.6348 23.7941 23.9957 18.4584 23.9984 11.9016C23.9995 8.72364 22.7577 5.73561 20.5019 3.48769ZM12.0494 21.7855H12.0456C10.2631 21.7846 8.51525 21.3081 6.99067 20.4075L6.62784 20.1933L2.8689 21.1745L3.87249 17.527L3.63609 17.1531C2.64185 15.5792 2.11698 13.7603 2.11772 11.8927C2.11991 6.44257 6.57497 2.00867 12.0532 2.00867C14.706 2.00976 17.1994 3.03926 19.0746 4.90753C20.9497 6.77579 21.9817 9.25937 21.9809 11.9007C21.9785 17.351 17.5233 21.7855 12.0494 21.7855Z"
                                                fill="#E0E0E0"
                                            />
                                            <path
                                                d="M0.548828 23.3172L2.16659 17.4362C1.16853 15.7151 0.643677 13.7624 0.644307 11.7625C0.646924 5.50497 5.76216 0.414062 12.0472 0.414062C15.0976 0.415434 17.9606 1.59735 20.1132 3.7425C22.2663 5.88762 23.4513 8.73896 23.4501 11.7714C23.4474 18.029 18.3319 23.1204 12.0476 23.1204C12.0472 23.1204 12.048 23.1204 12.0476 23.1204H12.0426C10.1342 23.1198 8.25913 22.6428 6.59372 21.7392L0.548828 23.3172Z"
                                                fill="url(#paint0_linear_4489_2838)"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9.09668 6.84272C8.87561 6.35338 8.64286 6.34359 8.43254 6.33503C8.26051 6.32768 8.06357 6.32813 7.86695 6.32813C7.67017 6.32813 7.3504 6.40176 7.07998 6.69579C6.8094 6.98982 6.04688 7.70062 6.04688 9.14626C6.04688 10.5921 7.10458 11.989 7.25201 12.1852C7.39959 12.3812 9.29377 15.4427 12.2936 16.6204C14.7867 17.5993 15.2941 17.4046 15.8352 17.3556C16.3764 17.3066 17.5813 16.6449 17.8273 15.9588C18.0733 15.2727 18.0733 14.6847 17.9995 14.5618C17.9257 14.4393 17.7289 14.3659 17.4338 14.2189C17.1386 14.072 15.6876 13.361 15.4171 13.2631C15.1465 13.1651 14.9497 13.1161 14.7529 13.4103C14.5561 13.7042 13.9909 14.3659 13.8187 14.5618C13.6465 14.7582 13.4743 14.7826 13.1791 14.6357C12.884 14.4883 11.9334 14.1784 10.8058 13.1773C9.92839 12.3986 9.33604 11.4368 9.16386 11.1426C8.99167 10.8487 9.1454 10.6895 9.29346 10.543C9.42597 10.4114 9.58863 10.2 9.73622 10.0285C9.88349 9.85687 9.93268 9.73442 10.0311 9.5385C10.1295 9.34228 10.0803 9.17071 10.0065 9.02377C9.93268 8.87684 9.3591 7.42373 9.09668 6.84272Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M20.4052 3.45157C18.1749 1.22961 15.2094 0.00529725 12.0498 0.00390625C5.53895 0.00390625 0.240447 5.27741 0.23783 11.7593C0.237063 13.8313 0.780829 15.8538 1.81439 17.6366L0.138672 23.7284L6.40032 22.0937C8.12555 23.0304 10.068 23.524 12.0447 23.5248H12.0497H12.0498C18.5596 23.5248 23.8588 18.2504 23.8616 11.7688C23.8627 8.62741 22.6351 5.67369 20.4052 3.45157ZM12.0498 21.5393H12.046C10.284 21.5384 8.55616 21.0675 7.04909 20.1771L6.69042 19.9654L2.97463 20.9354L3.96669 17.3298L3.73301 16.9601C2.75018 15.4043 2.23133 13.6063 2.23209 11.7601C2.23424 6.37256 6.63815 1.98955 12.0535 1.98955C14.6759 1.99063 17.1406 3.00831 18.9944 4.85513C20.848 6.70195 21.868 9.15701 21.8672 11.7681C21.8649 17.1557 17.4608 21.5393 12.0498 21.5393Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_4489_2838"
                                                x1="11.9995"
                                                y1="23.3172"
                                                x2="11.9995"
                                                y2="0.414101"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#20B038" />
                                                <stop offset="1" stop-color="#60D66A" />
                                            </linearGradient>
                                            <clipPath id="clip0_4489_2838">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
