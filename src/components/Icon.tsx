import React from 'react'

interface PathsProps{
    [name: string]: string
}

const Paths:PathsProps = 
{
    "android": "M14.9753 3.01891L15.9351 1.28732C15.9475 1.26511 15.9553 1.24068 15.9582 1.21545C15.961 1.19021 15.9589 1.16465 15.9519 1.14024C15.9449 1.11582 15.9332 1.09302 15.9174 1.07314C15.9016 1.05326 15.882 1.03669 15.8598 1.02438C15.8149 0.999506 15.762 0.993475 15.7127 1.00761C15.6634 1.02175 15.6217 1.0549 15.5968 1.09976L14.6264 2.85054C13.7984 2.48755 12.9041 2.30014 12 2.30014C11.0959 2.30014 10.2016 2.48755 9.37362 2.85054L8.40314 1.09976C8.37827 1.0549 8.33659 1.02175 8.28728 1.00761C8.23797 0.993475 8.18506 0.999506 8.14019 1.02438C8.09533 1.04925 8.06218 1.09093 8.04804 1.14024C8.03391 1.18955 8.03994 1.24246 8.06481 1.28732L9.02466 3.01892C8.11099 3.46929 7.339 4.16259 6.79337 5.02277C6.24774 5.88296 5.94955 6.87679 5.9315 7.89527H18.0685C18.0504 6.87679 17.7523 5.88295 17.2066 5.02277C16.661 4.16258 15.889 3.46928 14.9753 3.01891ZM9.19909 5.67451C9.09885 5.67451 9.00087 5.64479 8.91753 5.5891C8.83418 5.53341 8.76923 5.45426 8.73087 5.36166C8.69251 5.26905 8.68247 5.16715 8.70203 5.06884C8.72158 4.97053 8.76985 4.88023 8.84073 4.80935C8.9116 4.73847 9.00191 4.69021 9.10022 4.67065C9.19853 4.6511 9.30043 4.66113 9.39303 4.69949C9.48564 4.73785 9.56479 4.80281 9.62048 4.88615C9.67617 4.96949 9.70589 5.06748 9.70589 5.16771C9.70574 5.30208 9.6523 5.4309 9.55728 5.52591C9.46227 5.62092 9.33345 5.67436 9.19909 5.67451ZM14.8009 5.67451C14.7006 5.67451 14.6026 5.64479 14.5193 5.5891C14.436 5.53341 14.371 5.45426 14.3326 5.36166C14.2943 5.26905 14.2843 5.16715 14.3038 5.06884C14.3234 4.97053 14.3716 4.88023 14.4425 4.80935C14.5134 4.73847 14.6037 4.69021 14.702 4.67065C14.8003 4.6511 14.9022 4.66113 14.9948 4.69949C15.0874 4.73785 15.1666 4.80281 15.2223 4.88615C15.2779 4.96949 15.3077 5.06748 15.3077 5.16771C15.3075 5.30208 15.2541 5.4309 15.1591 5.52591C15.0641 5.62092 14.9352 5.67436 14.8009 5.67451ZM5.93141 17.1715C5.93141 17.5606 6.08598 17.9338 6.36112 18.2089C6.63626 18.4841 7.00943 18.6386 7.39854 18.6386H8.37214V21.6396C8.37165 21.8186 8.40649 21.9959 8.47464 22.1614C8.54279 22.3268 8.64292 22.4772 8.7693 22.604C8.89568 22.7307 9.04582 22.8312 9.21112 22.8998C9.37642 22.9684 9.55363 23.0037 9.73259 23.0037C9.91156 23.0037 10.0888 22.9684 10.2541 22.8998C10.4194 22.8312 10.5695 22.7307 10.6959 22.604C10.8223 22.4772 10.9224 22.3268 10.9906 22.1614C11.0587 21.9959 11.0935 21.8186 11.093 21.6396V18.6386H12.9069V21.6396C12.9064 21.8186 12.9413 21.9959 13.0094 22.1614C13.0776 22.3268 13.1777 22.4772 13.3041 22.604C13.4304 22.7307 13.5806 22.8312 13.7459 22.8998C13.9112 22.9684 14.0884 23.0037 14.2674 23.0037C14.4463 23.0037 14.6235 22.9684 14.7888 22.8998C14.9541 22.8312 15.1043 22.7307 15.2307 22.604C15.357 22.4772 15.4572 22.3268 15.5253 22.1614C15.5935 21.9959 15.6283 21.8186 15.6278 21.6396V18.6386H16.6015C16.9906 18.6386 17.3637 18.4841 17.6389 18.2089C17.914 17.9338 18.0686 17.5606 18.0686 17.1715V8.37537H5.93141V17.1715ZM4.06413 8.14196C3.70344 8.14237 3.35764 8.28584 3.1026 8.54089C2.84755 8.79593 2.70409 9.14173 2.70368 9.50242V15.1709C2.70319 15.3499 2.73803 15.5272 2.80618 15.6926C2.87433 15.8581 2.97446 16.0085 3.10084 16.1353C3.22722 16.262 3.37736 16.3625 3.54266 16.4311C3.70796 16.4997 3.88517 16.535 4.06413 16.535C4.2431 16.535 4.42031 16.4997 4.58561 16.4311C4.75091 16.3625 4.90105 16.262 5.02743 16.1353C5.15381 16.0085 5.25394 15.8581 5.32209 15.6926C5.39024 15.5272 5.42507 15.3499 5.42459 15.1709V9.50242C5.42418 9.14173 5.28072 8.79593 5.02567 8.54088C4.77062 8.28584 4.42482 8.14237 4.06413 8.14196ZM19.9358 8.14196C19.5751 8.14237 19.2293 8.28584 18.9743 8.54088C18.7192 8.79593 18.5758 9.14173 18.5754 9.50242V15.1709C18.5749 15.3499 18.6097 15.5272 18.6779 15.6926C18.746 15.8581 18.8462 16.0085 18.9725 16.1353C19.0989 16.262 19.249 16.3625 19.4143 16.4311C19.5796 16.4997 19.7569 16.535 19.9358 16.535C20.1148 16.535 20.292 16.4997 20.4573 16.4311C20.6226 16.3625 20.7727 16.262 20.8991 16.1353C21.0255 16.0085 21.1256 15.8581 21.1938 15.6926C21.2619 15.5272 21.2968 15.3499 21.2963 15.1709V9.50242C21.2959 9.14173 21.1524 8.79593 20.8974 8.54089C20.6423 8.28584 20.2965 8.14237 19.9358 8.14196Z",
    "apple": "M14.94 5.19C15.318 4.75428 15.6063 4.24817 15.7882 3.70074C15.9701 3.1533 16.0421 2.57533 16 2C14.8393 2.09369 13.762 2.63956 13 3.52C12.6351 3.94198 12.3586 4.43288 12.1868 4.96364C12.015 5.49441 11.9515 6.05424 12 6.61C12.5661 6.61472 13.1258 6.4891 13.6356 6.24286C14.1454 5.99662 14.5917 5.63637 14.94 5.19ZM17.46 12.63C17.4667 11.8637 17.6685 11.1118 18.0464 10.4452C18.4244 9.77859 18.9659 9.21926 19.62 8.82C19.2072 8.22524 18.6615 7.73483 18.0262 7.38767C17.3909 7.04052 16.6835 6.84615 15.96 6.82C14.4 6.66 12.96 7.73 12.13 7.73C11.3 7.73 10.13 6.84 8.82997 6.86C7.9801 6.888 7.15199 7.13578 6.42642 7.57919C5.70085 8.02259 5.10258 8.64648 4.68997 9.39C2.92997 12.45 4.23997 17 5.99997 19.47C6.79997 20.68 7.79997 22.05 9.11997 22C10.44 21.95 10.87 21.18 12.4 21.18C13.93 21.18 14.4 22 15.7 21.97C17 21.94 17.92 20.73 18.76 19.52C19.355 18.6415 19.8198 17.6816 20.14 16.67C19.3475 16.332 18.6713 15.7693 18.195 15.0513C17.7187 14.3333 17.4632 13.4916 17.46 12.63Z",
    "date": "M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z", 
    "account_info": "M14.55 12.22C15.0836 11.7581 15.5115 11.1869 15.8049 10.545C16.0982 9.90316 16.25 9.20571 16.25 8.5C16.25 7.17392 15.7232 5.90215 14.7855 4.96447C13.8478 4.02678 12.5761 3.5 11.25 3.5C9.92391 3.5 8.65214 4.02678 7.71445 4.96447C6.77677 5.90215 6.24999 7.17392 6.24999 8.5C6.25616 9.20958 6.41576 9.90944 6.71782 10.5515C7.01989 11.1937 7.45728 11.7628 7.99999 12.22C6.60013 12.8539 5.41245 13.8775 4.57897 15.1685C3.74548 16.4596 3.30146 17.9633 3.29999 19.5C3.29999 19.7652 3.40534 20.0196 3.59288 20.2071C3.78042 20.3946 4.03477 20.5 4.29999 20.5C4.5652 20.5 4.81956 20.3946 5.00709 20.2071C5.19463 20.0196 5.29999 19.7652 5.29999 19.5C5.29999 17.9087 5.93213 16.3826 7.05735 15.2574C8.18257 14.1321 9.70869 13.5 11.3 13.5C12.8913 13.5 14.4174 14.1321 15.5426 15.2574C16.6678 16.3826 17.3 17.9087 17.3 19.5C17.3 19.7652 17.4053 20.0196 17.5929 20.2071C17.7804 20.3946 18.0348 20.5 18.3 20.5C18.5652 20.5 18.8196 20.3946 19.0071 20.2071C19.1946 20.0196 19.3 19.7652 19.3 19.5C19.2942 17.9578 18.8427 16.4502 18 15.1586C17.1573 13.867 15.9592 12.8465 14.55 12.22ZM11.25 11.5C10.6566 11.5 10.0766 11.3241 9.58328 10.9944C9.08993 10.6648 8.70541 10.1962 8.47835 9.64805C8.25129 9.09987 8.19188 8.49667 8.30763 7.91473C8.42339 7.33279 8.70911 6.79824 9.12867 6.37868C9.54822 5.95912 10.0828 5.6734 10.6647 5.55764C11.2467 5.44189 11.8499 5.5013 12.398 5.72836C12.9462 5.95542 13.4148 6.33994 13.7444 6.83329C14.074 7.32664 14.25 7.90666 14.25 8.5C14.25 9.29565 13.9339 10.0587 13.3713 10.6213C12.8087 11.1839 12.0456 11.5 11.25 11.5ZM19.75 6.5C19.4848 6.5 19.2304 6.60536 19.0429 6.79289C18.8553 6.98043 18.75 7.23478 18.75 7.5V9.5C18.75 9.76522 18.8553 10.0196 19.0429 10.2071C19.2304 10.3946 19.4848 10.5 19.75 10.5C20.0152 10.5 20.2696 10.3946 20.4571 10.2071C20.6446 10.0196 20.75 9.76522 20.75 9.5V7.5C20.75 7.23478 20.6446 6.98043 20.4571 6.79289C20.2696 6.60536 20.0152 6.5 19.75 6.5ZM19 11.79C18.8173 11.9816 18.7137 12.2352 18.71 12.5C18.7092 12.6316 18.7345 12.7621 18.7842 12.8839C18.834 13.0057 18.9073 13.1166 19 13.21C19.0972 13.2983 19.2088 13.3694 19.33 13.42C19.4497 13.4729 19.5791 13.5002 19.71 13.5002C19.8409 13.5002 19.9703 13.4729 20.09 13.42C20.2141 13.3751 20.3268 13.3034 20.4201 13.2101C20.5134 13.1168 20.5851 13.0041 20.63 12.88C20.686 12.7613 20.7134 12.6312 20.71 12.5C20.7111 12.3014 20.6531 12.1069 20.5433 11.9414C20.4335 11.7759 20.2769 11.6468 20.0935 11.5706C19.91 11.4945 19.7081 11.4747 19.5133 11.5137C19.3186 11.5528 19.1399 11.649 19 11.79Z",
    "map": "M21.32 5.04999L15.32 3.04999H15.25C15.2035 3.04532 15.1566 3.04532 15.11 3.04999H14.88H14.75H14.68L9 4.99999L3.32 3.04999C3.16962 3.00041 3.00961 2.98724 2.85314 3.01158C2.69667 3.03592 2.54822 3.09707 2.42 3.18999C2.29076 3.28201 2.18527 3.40346 2.11224 3.5443C2.03921 3.68514 2.00074 3.84134 2 3.99999V18C1.99946 18.2096 2.06482 18.4141 2.18685 18.5846C2.30887 18.7551 2.48138 18.8829 2.68 18.95L8.68 20.95C8.88145 21.0157 9.09856 21.0157 9.3 20.95L15 19.05L20.68 21C20.7862 21.0144 20.8938 21.0144 21 21C21.2091 21.0029 21.4132 20.9361 21.58 20.81C21.7092 20.718 21.8147 20.5965 21.8878 20.4557C21.9608 20.3148 21.9993 20.1586 22 20V5.99999C22.0005 5.79035 21.9352 5.58584 21.8132 5.41536C21.6911 5.24489 21.5186 5.11708 21.32 5.04999ZM8 18.61L4 17.28V5.38999L8 6.71999V18.61ZM14 17.28L10 18.61V6.71999L14 5.38999V17.28ZM20 18.61L16 17.28V5.38999L20 6.71999V18.61Z",
    "info": "M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0003 17.9983C12.5528 17.9983 13.0007 17.5506 13.0007 16.9983C13.0007 16.4461 12.5528 15.9983 12.0003 15.9983C11.4479 15.9983 11 16.4461 11 16.9983C11 17.5506 11.4479 17.9983 12.0003 17.9983ZM13.0036 5.99835H11.003V13.9983H13.0036V5.99835Z",
    "radio": "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20.1818C16.5187 20.1818 20.1818 16.5187 20.1818 12C20.1818 7.48133 16.5187 3.81821 12 3.81821C7.48127 3.81821 3.81815 7.48133 3.81815 12C3.81815 16.5187 7.48127 20.1818 12 20.1818ZM12 17.4545C15.0124 17.4545 17.4545 15.0124 17.4545 12C17.4545 8.98749 15.0124 6.54541 12 6.54541C8.98749 6.54541 6.54541 8.98749 6.54541 12C6.54541 15.0124 8.98749 17.4545 12 17.4545Z",
    "checkbox": "M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2ZM5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM15.2928 8.29291L9.99995 13.5858L7.70706 11.2929L6.29285 12.7071L9.99995 16.4142L16.7071 9.70712L15.2928 8.29291Z",
    "duplicate": "M18 6V17C19.1046 17 20 16.1046 20 15V5C20 3.89543 19.1046 3 18 3H8C6.89543 3 6 3.89543 6 5H17C17.5523 5 18 5.44772 18 6ZM5 6H15C16.1046 6 17 6.89543 17 8V18C17 19.1046 16.1046 20 15 20H5C3.89543 20 3 19.1046 3 18V8C3 6.89543 3.89543 6 5 6ZM5 8V18H15V8H5Z",
    "shop": "M19 6H5C4.44995 6 4 5.54999 4 5C4 4.45001 4.44995 4 5 4H19C19.55 4 20 4.45001 20 5C20 5.54999 19.55 6 19 6ZM20.16 7.79999C20.0699 7.34003 19.66 7 19.1801 7H4.81995C4.33997 7 3.93005 7.34003 3.83997 7.79999L3 12V13C3 13.55 3.44995 14 4 14V19C4 19.55 4.44995 20 5 20H13C13.55 20 14 19.55 14 19V14H18V19C18 19.55 18.45 20 19 20C19.55 20 20 19.55 20 19V14C20.55 14 21 13.55 21 13V12L20.16 7.79999ZM12 18H6V14H12V18Z",
    "therms": "M2 20C2 21.1046 2.89543 22 4 22H17.4142L22 17.4142V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20ZM4 4H20V15H17C15.8954 15 15 15.8954 15 17V20H4V4ZM17 17H19.5858L17 19.5858V17ZM7 15V17H13V15H7ZM7 13V11H17V13H7ZM7 7V9H17V7H7Z",
    "help": "M12 22C13.7246 22 15.387 21.562 16.8595 20.7418L21.0947 21.0947L20.7418 16.8595C21.562 15.387 22 13.7246 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.115 18.8621L16.3916 18.6958L18.9053 18.9053L18.6958 16.3916L18.8621 16.115C19.603 14.8824 20 13.4715 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.4715 20 14.8824 19.603 16.115 18.8621ZM12.0003 16.9983C12.5528 16.9983 13.0007 16.5506 13.0007 15.9983C13.0007 15.4461 12.5528 14.9983 12.0003 14.9983C11.4479 14.9983 11 15.4461 11 15.9983C11 16.5506 11.4479 16.9983 12.0003 16.9983ZM11 14H13V13C13 13.0024 13.0047 12.9972 13.0154 12.9854C13.0417 12.9565 13.1039 12.888 13.2205 12.7955C13.3207 12.716 13.3517 12.6954 13.6048 12.535C14.4661 11.989 15 11.0396 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10H11C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10C13 10.3473 12.8225 10.6629 12.534 10.8458C12.2102 11.0511 12.1564 11.0867 11.9775 11.2286C11.3827 11.7005 11 12.2627 11 13V14Z",
    "clipboard":"M8.99592 2C9.7482 1.36297 10.8391 1 12 1C13.1609 1 14.2518 1.36297 15.0041 2H16C17.1046 2 18 2.89543 18 4H19C20.1046 4 21 4.89543 21 6V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V6C3 4.89543 3.89543 4 5 4H6C6 2.89543 6.89543 2 8 2H8.99592ZM16 7C16.7403 7 17.3866 6.5978 17.7324 6H19V21H5V6H6.26756C6.61337 6.5978 7.25972 7 8 7H16ZM8 16V14H14V16H8ZM8 10V12H16V10H8ZM9.85762 4L10.1566 3.65538C10.4852 3.27674 11.1894 3 12 3C12.8106 3 13.5148 3.27674 13.8434 3.65538L14.1424 4H16V5H8V4H9.40135H9.85762Z",
    "hearth": "M7.93022 3.52941C6.8379 3.52941 5.76585 3.83754 4.82128 4.4157C1.89911 6.20669 0.903196 10.1627 2.57493 13.2365C2.90059 13.8358 3.45679 14.5126 4.12151 15.2047C4.7899 15.9006 5.58337 16.6276 6.39834 17.3274C8.0283 18.727 9.75839 20.03 10.7777 20.7763C11.1337 21.0376 11.5569 21.1765 11.9994 21.1765C12.4423 21.1765 12.8646 21.0374 13.2236 20.7776L13.2251 20.7765C14.2443 20.0303 15.9746 18.7271 17.6047 17.3274C18.4197 16.6276 19.2131 15.9006 19.8815 15.2047C20.5463 14.5126 21.1026 13.8355 21.4283 13.2362C23.0956 10.1625 22.0997 6.20671 19.1775 4.4157C18.233 3.83754 17.1609 3.52941 16.0686 3.52941C14.5473 3.52941 13.1134 4.10297 11.9994 5.12726C10.8854 4.10297 9.45148 3.52941 7.93022 3.52941ZM5.36349 5.97959C5.3633 5.97973 5.36312 5.97986 5.36294 5.97999L5.24086 6.46606C3.84275 7.70259 3.31399 9.77523 3.94855 11.6115L3.81822 12.1303C3.81823 12.1304 3.81824 12.1304 3.81825 12.1304L3.94859 11.6116C4.03427 11.8595 4.14116 12.1031 4.26998 12.3398C4.52968 12.818 5.03242 13.4205 5.68752 14.0843C6.33757 14.7431 7.11888 15.4439 7.91678 16.1182C9.51168 17.466 11.1581 18.6957 11.9211 19.2536C11.9648 19.285 12.0293 19.2851 12.0731 19.2539C12.8364 18.6937 14.4829 17.4629 16.0778 16.115C16.8758 15.4407 17.6571 14.7402 18.3072 14.0819C18.9623 13.4185 19.4649 12.817 19.7246 12.3398C20.9338 10.1183 20.2106 7.28097 18.1547 6.02218L18.1541 6.02182C17.5177 5.63035 16.7979 5.42449 16.0686 5.42449C14.792 5.42449 13.5887 6.03391 12.7699 7.10932L12.7694 7.10996L11.9994 8.13189L11.2294 7.10996L11.2288 7.10927C10.4099 6.03375 9.21084 5.42449 7.93022 5.42449C7.20116 5.42449 6.48112 5.63022 5.84004 6.0221C5.62579 6.1537 5.42601 6.30236 5.24139 6.46559L5.36349 5.97959ZM5.24139 6.46559C5.24121 6.46574 5.24104 6.4659 5.24086 6.46606L3.94855 11.6115C3.94856 11.6115 3.94857 11.6115 3.94859 11.6116L5.24139 6.46559Z",
    "home": "M4.293 10.707L11.293 3.70697C11.6835 3.31659 12.3165 3.31659 12.707 3.70697L19.707 10.707C19.8945 10.8945 20 11.1488 20 11.414V21C20 21.5523 19.5523 22 19 22H14V15H10V22H5C4.44772 22 4 21.5523 4 21V11.414C4 11.1488 4.10545 10.8945 4.293 10.707Z",
    "home_outline": "M19 22H5C4.44772 22 4 21.5523 4 21V11.414C4 11.1488 4.10545 10.8945 4.293 10.707L11.293 3.70698C11.4806 3.51921 11.7351 3.4137 12.0005 3.4137C12.2659 3.4137 12.5204 3.51921 12.708 3.70698L19.708 10.707C19.8957 10.8943 20.0009 11.1488 20 11.414V21C20 21.5523 19.5523 22 19 22ZM10 15H14V20H18V11.828L12 5.82798L6 11.828V20H10V15Z",
    "order": "M5.01 4L5 19C5.00001 20.5 5.01 21 5.01 21L9.00006 18.5L12 21L15.0001 18.5L18.9899 21C18.9956 20.7204 18.9949 20.5971 18.9933 20.2805V20.2804C18.992 20.0308 18.99 19.6611 18.99 19V4C18.99 2.89932 18.1007 2.0055 17 2H7C5.89934 2.0055 5.00999 2.89932 5.01 4ZM8.00006 6H13.0001V8H8.00006V6ZM15 9H8V11H15V9Z",
    "order_outline": "M4.99994 19L5.00994 4C5.00993 2.89932 5.89928 2.0055 6.99994 2L16.9999 2C18.1006 2.0055 18.99 2.89932 18.9899 4L18.9899 19C18.9899 20.5 19 20.5 18.9899 21L15 18.5L11.9999 21L9 18.5L5.00994 21C5.00994 21 4.99996 20.5 4.99994 19ZM16.9999 4L6.99994 4L7 17.5L9 16L11.9999 18.5L15 16L16.9999 17.5L16.9999 4Z",
    "reorder": "M17 11L17 9L7 9L7 11L17 11ZM17 15L17 13L7 13L7 15L17 15Z",
    "arrow-right": "M9.00002 6.71063C8.61002 7.10063 8.61002 7.73063 9.00002 8.12063L12.88 12.0006L9.00002 15.8806C8.61002 16.2706 8.61002 16.9006 9.00002 17.2906C9.39002 17.6806 10.02 17.6806 10.41 17.2906L15 12.7006C15.39 12.3106 15.39 11.6806 15 11.2906L10.41 6.70063C10.03 6.32063 9.39002 6.32063 9.00002 6.71063Z",
    "arrow-down": "M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z",
    "plus": "M13 11h4.993c.556 0 1.007.444 1.007 1 0 .552-.45 1-1.007 1H13v4.993a1 1 0 1 1-2 0V13H6.007A1.001 1.001 0 0 1 5 12c0-.552.45-1 1.007-1H11V6.007a1 1 0 1 1 2 0V11z",
    "less": "M17.993 11c.556 0 1.007.444 1.007 1 0 .552-.45 1-1.007 1H6.007A1.001 1.001 0 0 1 5 12c0-.552.45-1 1.007-1h11.986z",
    "edit": "M15.4374 4C16.0921 4 16.7197 4.26142 17.1781 4.72342L19.279 6.82432C19.7407 7.286 20.0001 7.91217 20.0001 8.56508C20.0001 9.21799 19.7407 9.84416 19.279 10.3058L10.9575 18.6238C10.259 19.4295 9.2689 19.9245 8.1346 20.0023H4V19.0023L4.00325 15.7873C4.08844 14.7328 4.57867 13.7523 5.3265 13.0934L13.6954 4.72463C14.1564 4.26083 14.7834 4 15.4374 4ZM8.06398 18.0048C8.59821 17.967 9.09549 17.7184 9.49479 17.2616L15.5567 11.1997L12.8024 8.44526L6.6961 14.5496C6.29095 14.9079 6.04031 15.4092 6 15.8678V18.0029L8.06398 18.0048ZM14.2169 7.03128L16.9709 9.7855L17.8648 8.89162C17.9514 8.80502 18.0001 8.68756 18.0001 8.56508C18.0001 8.4426 17.9514 8.32514 17.8648 8.23854L15.7611 6.13486C15.6755 6.04855 15.5589 6 15.4374 6C15.3158 6 15.1992 6.04855 15.1136 6.13486L14.2169 7.03128Z",
    "vertical-grid": "M17 20H13V16H17V20ZM11 20H7V16H11V20ZM17 14H13V10H17V14ZM11 14H7V10H11V14ZM17 8H13V4H17V8ZM11 8H7V4H11V8Z",
    "more_horizontal": "M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14Z",
    "search": "M2.93509 11.9351C2.93508 6.68835 7.18838 2.43506 12.4351 2.43506C17.6818 2.43506 21.9351 6.68835 21.9351 11.9351C21.9351 17.1818 17.6818 21.4351 12.4351 21.4351C10.4333 21.4351 8.57616 20.8159 7.04464 19.7587L3.93937 22.864L1.81805 20.7427L4.8737 17.687C3.65733 16.0905 2.93509 14.0971 2.93509 11.9351ZM17.0313 16.5312C14.4929 19.0696 10.3773 19.0696 7.8389 16.5312C5.30049 13.9928 5.3005 9.87726 7.8389 7.33885C10.3773 4.80044 14.4929 4.80044 17.0313 7.33885C19.5697 9.87726 19.5697 13.9928 17.0313 16.5312Z",
    "search_outline": "M3.55634 11.7279C3.55634 6.75736 7.58577 2.72792 12.5563 2.72792C17.5269 2.72792 21.5563 6.75736 21.5563 11.7279C21.5563 16.6985 17.5269 20.7279 12.5563 20.7279C10.4313 20.7279 8.4783 19.9914 6.93862 18.7598L4.07106 21.6274L2.65685 20.2131L5.52442 17.3456C4.2928 15.8059 3.55634 13.8529 3.55634 11.7279ZM17.5061 16.6776C14.7724 19.4113 10.3403 19.4113 7.60662 16.6776C4.87295 13.944 4.87295 9.51182 7.60662 6.77815C10.3403 4.04448 14.7724 4.04448 17.5061 6.77815C20.2398 9.51182 20.2398 13.944 17.5061 16.6776Z",
    "bag": "M7.03367 6C7.32766 3.81519 9.51103 2 12.0001 2C14.4891 2 16.6725 3.81519 16.9665 6H19.8471C20.9516 6 21.8471 6.89543 21.8471 8C21.8471 8.09464 21.8404 8.18916 21.827 8.28284L20.1127 20.2828C19.9719 21.2681 19.1281 22 18.1328 22H5.86737C4.87207 22 4.02823 21.2681 3.88747 20.2828L2.17319 8.28284C2.01698 7.18937 2.77678 6.17631 3.87024 6.0201C3.96393 6.00672 4.05845 6 4.15309 6H7.03367ZM14.928 6C14.624 4.93808 13.3981 4 12.0001 4C10.602 4 9.37619 4.93808 9.0722 6H14.928ZM4.15309 8H7.00008V10H9.00008V8H15.0001V10H17.0001V8H19.8471L18.1328 20H5.86737L4.15309 8Z",
    "user": "M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8Z M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6.5C6.5 20.4087 6.87478 19.1252 8 18C9.12522 16.8748 10.4087 16.3431 12 16.3431C13.5913 16.3431 14.8748 16.8748 16 18C17.1252 19.1252 17.5 20.4087 17.5 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z",
    "user_outline": "M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z",
    "star": "M6.17034 14.8942L4.79412 22.9182L12.0001 19.1298L19.2061 22.9182L17.8299 14.8942L23.6596 9.21159L15.6031 8.04091L12.0001 0.740448L8.39711 8.04091L0.340576 9.21159L6.17034 14.8942ZM15.6809 14.196L16.5498 19.2622L12.0001 16.8702L7.45038 19.2622L8.3193 14.196L4.6385 10.6081L9.72524 9.86892L12.0001 5.25955L14.275 9.86892L19.3617 10.6081L15.6809 14.196Z",
    "newspaper": "M4 18V5H16V18C16 18.3506 16.0602 18.6872 16.1707 19H5C4.44772 19 4 18.5523 4 18ZM19 21H5C3.34315 21 2 19.6569 2 18V3H16H17H18V8H22V9V10V18C22 19.6569 20.6569 21 19 21ZM18 10H20V18C20 18.5523 19.5523 19 19 19C18.4477 19 18 18.5523 18 18V10ZM10 7V11H6V7H10ZM14 10V8H11V10H14ZM14 12V14H6V12H14ZM14 17V15H6V17H14Z",
    "indoor": "M14 7C14 7.28 13.9399 7.54999 13.84 7.79001C17.75 8.60001 20.73 11.93 21 16H3C3.27002 11.93 6.25 8.60001 10.16 7.79001C10.0601 7.54999 10 7.28 10 7C10 5.89999 10.9 5 12 5C13.1 5 14 5.89999 14 7ZM22 18C22 17.45 21.55 17 21 17H3C2.44995 17 2 17.45 2 18C2 18.55 2.44995 19 3 19H21C21.55 19 22 18.55 22 18Z",
    "wallet": "M15.4506 1.40266C16.5126 1.09921 17.6196 1.7142 17.923 2.77627C17.9741 2.95495 18 3.13988 18 3.32571V4.99998H20C21.1046 4.99998 22 5.89541 22 6.99998V19C22 20.1045 21.1046 21 20 21H4C2.89543 21 2 20.1045 2 19H2.0267C2.00895 18.8924 2 18.7835 2 18.6742V6.75428C2 5.86132 2.59195 5.07655 3.45056 4.83123L15.4506 1.40266ZM10.1401 19H20V11H18V15.2457C18 16.1386 17.408 16.9234 16.5494 17.1687L10.1401 19ZM20 6.99998V8.99998H18V6.99998H20ZM4 6.75426V18.6742L16 15.2457V3.32568L4 6.75426ZM14 8.99998C14 9.55227 13.5523 9.99998 13 9.99998C12.4477 9.99998 12 9.55227 12 8.99998C12 8.4477 12.4477 7.99998 13 7.99998C13.5523 7.99998 14 8.4477 14 8.99998Z",
    "pin": "M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99999C10.9282 6.99999 9.93782 7.57179 9.40193 8.49999C8.86603 9.42819 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6568 15 9.99999C15 8.34313 13.6569 6.99999 12 6.99999Z",
    "stopwatch": "M12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13C19.995 17.4162 16.4162 20.995 12 21ZM12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C17.9961 9.68789 15.3121 7.00386 12 7ZM13 14H11V9H13V14ZM19.293 7.707L17.293 5.707L18.707 4.293L20.707 6.293L19.294 7.706L19.293 7.707ZM15 4H9V2H15V4Z",
    "happy": "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM12 18C10.42 18.0267 8.9266 17.28 8 16C7.55008 15.3983 7.21141 14.721 7 14H17C17 14 17 14 17 14.008C16.7853 14.7252 16.4469 15.3994 16 16C15.0733 17.2799 13.5799 18.0266 12 18ZM8.5 12C7.67157 12 7 11.3284 7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5C10 11.3284 9.32843 12 8.5 12ZM15.493 11.986C14.6684 11.986 14 11.3176 14 10.493C14 9.66844 14.6684 9 15.493 9C16.3176 9 16.986 9.66844 16.986 10.493C16.9849 11.3171 16.3171 11.9849 15.493 11.986Z",
    "motocycle": "M19.4399 9.03L17.3101 6.89999L15.71 5.3C15.52 5.11 15.26 5 15 5H12C11.45 5 11 5.45 11 6C11 6.55 11.45 7 12 7H14.59L16.59 9H5C2.19995 9 0 11.2 0 14C0 16.8 2.19995 19 5 19C7.45996 19 9.44995 17.31 9.90002 15H10.72C11.25 15 11.76 14.79 12.13 14.41L14.3101 12.23C14.11 12.77 14 13.37 14 14C14 16.8 16.2 19 19 19C21.8 19 24 16.8 24 14C24 11.35 22.03 9.23 19.4399 9.03ZM5 15H7.81995C7.40002 16.15 6.28003 17 5 17C3.37 17 2 15.63 2 14C2 12.37 3.37 11 5 11C6.28003 11 7.40002 11.85 7.81995 13H5C4.44995 13 4 13.45 4 14C4 14.55 4.44995 15 5 15ZM16 14C16 15.66 17.34 17 19 17C20.66 17 22 15.66 22 14C22 12.34 20.66 11 19 11C17.34 11 16 12.34 16 14Z",
    "walking": "M15 3.25C15 4.35001 14.1 5.25 13 5.25C11.9 5.25 11 4.35001 11 3.25C11 2.14999 11.9 1.25 13 1.25C14.1 1.25 15 2.14999 15 3.25ZM6.73999 21.56L9.30005 8.64999L7.5 9.35001V11.75C7.5 12.3 7.05005 12.75 6.5 12.75C5.94995 12.75 5.5 12.3 5.5 11.75V9.38C5.5 8.57001 5.97998 7.85001 6.71997 7.53L10.55 5.91C11.52 5.5 12.64 5.85999 13.2 6.75L14.2 8.35001C14.87 9.53 16.13 10.43 17.65 10.68C18.14 10.76 18.5 11.17 18.5 11.66C18.5 12.27 17.96 12.75 17.36 12.66C15.62 12.38 14.0699 11.49 13 10.25L12.4 13.25L13.88 14.66C14.28 15.04 14.5 15.56 14.5 16.11V21.75C14.5 22.3 14.05 22.75 13.5 22.75C12.95 22.75 12.5 22.3 12.5 21.75V16.75L10.4 14.75L8.78003 21.97C8.67004 22.43 8.27002 22.75 7.80005 22.75H7.71997C7.08997 22.75 6.60999 22.17 6.73999 21.56Z",
    "check": "M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z",
    "close_circle": "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 10.59L15.59 7L17 8.41L13.41 12L17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59Z",
    "close": "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z",
    "pause": "M16 2C15.2044 2 14.4413 2.31607 13.8787 2.87868C13.3161 3.44129 13 4.20435 13 5V19C13 19.7956 13.3161 20.5587 13.8787 21.1213C14.4413 21.6839 15.2044 22 16 22C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7956 2 16 2ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20C15.7348 20 15.4804 19.8946 15.2929 19.7071C15.1054 19.5196 15 19.2652 15 19V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V19ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22C8.79565 22 9.55871 21.6839 10.1213 21.1213C10.6839 20.5587 11 19.7956 11 19V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2ZM9 19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5V19Z",
    "pause_circle": "M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9 7H11V17H9V7ZM15 7H13V17H15V7Z",
    "play": "M18.54 9.00027L8.87997 3.46027C8.35725 3.15843 7.76397 3.00031 7.16036 3.00197C6.55676 3.00362 5.96435 3.165 5.4433 3.46971C4.92225 3.77442 4.49112 4.2116 4.19372 4.73685C3.89631 5.2621 3.74321 5.8567 3.74997 6.46027V17.5803C3.74997 18.4873 4.11029 19.3572 4.75167 19.9986C5.39304 20.6399 6.26293 21.0003 7.16997 21.0003C7.77041 20.9993 8.36006 20.8406 8.87997 20.5403L18.54 15.0003C19.059 14.6999 19.49 14.2682 19.7896 13.7487C20.0891 13.2292 20.2468 12.64 20.2468 12.0403C20.2468 11.4405 20.0891 10.8514 19.7896 10.3318C19.49 9.8123 19.059 9.38068 18.54 9.08027V9.00027ZM17.54 13.1903L7.87997 18.8103C7.66346 18.933 7.41884 18.9975 7.16997 18.9975C6.9211 18.9975 6.67648 18.933 6.45997 18.8103C6.24407 18.6856 6.06479 18.5063 5.94015 18.2904C5.81552 18.0745 5.74993 17.8296 5.74997 17.5803V6.42027C5.74993 6.17097 5.81552 5.92605 5.94015 5.71013C6.06479 5.49422 6.24407 5.31492 6.45997 5.19027C6.67738 5.06943 6.92127 5.00416 7.16997 5.00027C7.4185 5.00537 7.66211 5.07056 7.87997 5.19027L17.54 10.7703C17.756 10.8949 17.9353 11.0741 18.06 11.2901C18.1847 11.506 18.2504 11.7509 18.2504 12.0003C18.2504 12.2496 18.1847 12.4946 18.06 12.7105C17.9353 12.9264 17.756 13.1057 17.54 13.2303V13.1903Z"
}

interface IconProps{
    name: keyof PathsProps,
    size?: number,
    color?: string,
    style?: any
}

const Icon = ({name,size = 24,style,color = "currentColor",...rest}: IconProps) => <div style={{width:size,height: size}}><svg {...rest} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d={Paths[name]} fill={color}/>
</svg></div>

export default Icon