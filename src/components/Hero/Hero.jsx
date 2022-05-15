import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import styles from './Hero.module.css';
import heroImg from '../../assets/cash-removebg.png';

function Hero() {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.heroText}>
        <h1 className={styles.primaryHeading}>a better way to do ajoo</h1>
        <p className={styles.heroDescription}>
          Digitize Payment,Formalize Remittance! Start Monitoring Your Ajoo
          Contributions At The Click Of A Button.
        </p>
        <div className={styles.heroBtn}>
          <Button
            text={'create free account'}
            bgColor={'--primary-color'}
            color={'--white-color'}
            hoverColor={'--btn-hover-color'}
          />
        </div>
        <div className={styles.downloadLinks}>
          <Link to={'/'}>
            <svg className={styles.ios} viewBox="0 0 120 40" fill="none">
              <g clipPath="url(#clip0_app_papaa_plaay)">
                <path
                  d="M110.135 -0.000114141H9.53468C9.16798 -0.000114141 8.80568 -0.000114141 8.43995 0.00188586C8.1338 0.00388586 7.83009 0.00969586 7.521 0.0145859C6.84951 0.0224877 6.17961 0.0815621 5.5171 0.191296C4.85552 0.303418 4.21467 0.514802 3.61622 0.818296C3.0185 1.12436 2.47235 1.52205 1.99757 1.99696C1.5203 2.47052 1.12246 3.0179 0.81935 3.61805C0.5154 4.21699 0.304641 4.85882 0.19435 5.52137C0.0830109 6.18307 0.0230984 6.85241 0.01515 7.52337C0.00587 7.82997 0.00489 8.13759 0 8.44423V31.5585C0.00489 31.869 0.00587 32.1698 0.01515 32.4804C0.0231008 33.1513 0.0830134 33.8206 0.19435 34.4823C0.304336 35.1452 0.515108 35.7874 0.81935 36.3866C1.12233 36.9848 1.52022 37.53 1.99757 38.0009C2.47054 38.4779 3.01705 38.8759 3.61622 39.1796C4.21467 39.4839 4.85545 39.6965 5.5171 39.8104C6.17972 39.9192 6.84956 39.9783 7.521 39.9872C7.83009 39.994 8.1338 39.9979 8.43995 39.9979C8.80567 39.9999 9.168 39.9999 9.53468 39.9999H110.135C110.494 39.9999 110.859 39.9999 111.219 39.9979C111.523 39.9979 111.836 39.994 112.141 39.9872C112.811 39.9788 113.479 39.9197 114.141 39.8104C114.804 39.6957 115.448 39.4831 116.049 39.1796C116.647 38.8757 117.193 38.4777 117.666 38.0009C118.142 37.5281 118.541 36.9833 118.848 36.3866C119.15 35.787 119.358 35.1448 119.467 34.4823C119.578 33.8205 119.64 33.1514 119.652 32.4804C119.656 32.1698 119.656 31.869 119.656 31.5585C119.664 31.1952 119.664 30.8339 119.664 30.4647V9.53602C119.664 9.16981 119.664 8.80653 119.656 8.44423C119.656 8.13759 119.656 7.82997 119.652 7.52333C119.64 6.85231 119.578 6.18312 119.467 5.52133C119.358 4.85917 119.149 4.21739 118.848 3.61801C118.23 2.41508 117.252 1.43591 116.049 0.818206C115.448 0.515453 114.804 0.304126 114.141 0.191206C113.48 0.0809886 112.811 0.0218936 112.141 0.0144459C111.836 0.00956586 111.523 0.00370586 111.219 0.00175586C110.859 -0.000244141 110.494 -0.000244141 110.135 -0.000244141V-0.000114141Z"
                  fill="#A6A6A6"
                ></path>
                <path
                  d="M8.44487 39.125C8.14019 39.125 7.84287 39.1211 7.54058 39.1143C6.91436 39.1061 6.2896 39.0516 5.67144 38.9512C5.09503 38.8519 4.53664 38.6673 4.0147 38.4033C3.49754 38.1415 3.02585 37.7983 2.6177 37.3867C2.20364 36.98 1.85891 36.5082 1.59719 35.9902C1.33258 35.4688 1.14945 34.9099 1.05419 34.333C0.951311 33.7131 0.895651 33.0863 0.887687 32.458C0.881347 32.2471 0.873047 31.5449 0.873047 31.5449V8.44434C0.873047 8.44434 0.881887 7.75293 0.887737 7.5498C0.895363 6.92248 0.950699 6.29665 1.05327 5.67773C1.14871 5.09925 1.33197 4.53875 1.59673 4.01563C1.85749 3.49794 2.2003 3.02586 2.61187 2.61768C3.02297 2.20562 3.49617 1.8606 4.01421 1.59521C4.53495 1.33209 5.09228 1.14873 5.66753 1.05127C6.28772 0.949836 6.91465 0.894996 7.54304 0.88721L8.44536 0.875H111.214L112.127 0.8877C112.75 0.895099 113.371 0.94945 113.985 1.05029C114.566 1.14898 115.13 1.33362 115.656 1.59814C116.694 2.13299 117.539 2.97916 118.071 4.01807C118.332 4.53758 118.512 5.09351 118.607 5.66699C118.71 6.29099 118.768 6.92174 118.78 7.5542C118.783 7.8374 118.783 8.1416 118.783 8.44434C118.791 8.81934 118.791 9.17627 118.791 9.53613V30.4648C118.791 30.8281 118.791 31.1826 118.783 31.54C118.783 31.8652 118.783 32.1631 118.779 32.4697C118.768 33.0909 118.711 33.7104 118.608 34.3232C118.515 34.9043 118.333 35.4675 118.068 35.9932C117.805 36.5056 117.462 36.9733 117.053 37.3789C116.644 37.7927 116.172 38.1379 115.653 38.4014C115.128 38.6674 114.566 38.8527 113.985 38.9512C113.367 39.0522 112.742 39.1067 112.116 39.1143C111.823 39.1211 111.517 39.125 111.219 39.125L110.135 39.127L8.44487 39.125Z"
                  fill="black"
                ></path>
                <path
                  d="M24.769 20.3006C24.7797 19.4659 25.0014 18.6475 25.4135 17.9216C25.8255 17.1956 26.4145 16.5857 27.1256 16.1485C26.6738 15.5034 26.0779 14.9724 25.385 14.5979C24.6922 14.2233 23.9216 14.0155 23.1344 13.9908C21.4552 13.8146 19.8272 14.9957 18.9715 14.9957C18.0992 14.9957 16.7817 14.0083 15.363 14.0375C14.4453 14.0672 13.551 14.334 12.7671 14.8121C11.9832 15.2901 11.3365 15.9631 10.8901 16.7654C8.95607 20.1138 10.3987 25.0349 12.2513 27.7415C13.1782 29.0668 14.2615 30.5473 15.6789 30.4948C17.066 30.4372 17.584 29.6103 19.2583 29.6103C20.9171 29.6103 21.4031 30.4948 22.8493 30.4614C24.3377 30.4372 25.2754 29.1302 26.1698 27.7923C26.8358 26.8479 27.3483 25.8042 27.6882 24.6997C26.8235 24.334 26.0856 23.7218 25.5665 22.9395C25.0474 22.1572 24.77 21.2394 24.769 20.3006Z"
                  fill="white"
                ></path>
                <path
                  d="M22.0373 12.2108C22.8489 11.2366 23.2487 9.98445 23.1518 8.72021C21.912 8.85044 20.7668 9.44299 19.9443 10.3798C19.5421 10.8375 19.2341 11.3699 19.0379 11.9467C18.8416 12.5235 18.761 13.1333 18.8006 13.7412C19.4207 13.7476 20.0342 13.6132 20.5949 13.3481C21.1555 13.083 21.6487 12.6942 22.0373 12.2108Z"
                  fill="white"
                ></path>
                <path
                  d="M42.3025 27.1397H37.5691L36.4324 30.4961H34.4275L38.9109 18.0781H40.9939L45.4773 30.4961H43.4382L42.3025 27.1397ZM38.0593 25.5908H41.8113L39.9617 20.1436H39.91L38.0593 25.5908Z"
                  fill="white"
                ></path>
                <path
                  d="M55.1599 25.9697C55.1599 28.7832 53.6541 30.5908 51.3816 30.5908C50.806 30.6209 50.2335 30.4883 49.7297 30.2082C49.2259 29.928 48.8112 29.5117 48.533 29.0068H48.49V33.4912H46.6316V21.4423H48.4305V22.9482H48.4646C48.7556 22.4457 49.1773 22.0316 49.6849 21.7497C50.1926 21.4679 50.7671 21.3289 51.3474 21.3476C53.6453 21.3476 55.1599 23.164 55.1599 25.9697ZM53.2498 25.9697C53.2498 24.1367 52.3025 22.9316 50.8572 22.9316C49.4373 22.9316 48.4822 24.1621 48.4822 25.9697C48.4822 27.7939 49.4373 29.0156 50.8572 29.0156C52.3025 29.0156 53.2498 27.8193 53.2498 25.9697Z"
                  fill="white"
                ></path>
                <path
                  d="M65.1248 25.9697C65.1248 28.7832 63.6189 30.5908 61.3465 30.5908C60.7708 30.6209 60.1983 30.4883 59.6945 30.2081C59.1907 29.928 58.776 29.5117 58.4978 29.0068H58.4548V33.4912H56.5964V21.4423H58.3953V22.9482H58.4294C58.7204 22.4457 59.1421 22.0315 59.6498 21.7497C60.1574 21.4679 60.7319 21.3289 61.3123 21.3476C63.6101 21.3476 65.1248 23.164 65.1248 25.9697ZM63.2146 25.9697C63.2146 24.1367 62.2674 22.9316 60.822 22.9316C59.4021 22.9316 58.447 24.1621 58.447 25.9697C58.447 27.7939 59.4021 29.0156 60.822 29.0156C62.2674 29.0156 63.2146 27.8193 63.2146 25.9697H63.2146Z"
                  fill="white"
                ></path>
                <path
                  d="M71.7107 27.0362C71.8484 28.2676 73.0447 29.0762 74.6795 29.0762C76.2459 29.0762 77.3728 28.2676 77.3728 27.1572C77.3728 26.1934 76.6931 25.6162 75.0838 25.2207L73.4744 24.833C71.1941 24.2822 70.1355 23.2158 70.1355 21.4854C70.1355 19.3428 72.0027 17.8711 74.6541 17.8711C77.2781 17.8711 79.0769 19.3428 79.1375 21.4854H77.2615C77.1492 20.2461 76.1248 19.4981 74.6277 19.4981C73.1306 19.4981 72.1062 20.2549 72.1062 21.3565C72.1062 22.2344 72.7605 22.751 74.3611 23.1465L75.7292 23.4824C78.2771 24.0849 79.3357 25.1084 79.3357 26.9248C79.3357 29.248 77.4851 30.7031 74.5417 30.7031C71.7878 30.7031 69.9285 29.2822 69.8083 27.0361L71.7107 27.0362Z"
                  fill="white"
                ></path>
                <path
                  d="M83.3464 19.2998V21.4424H85.0681V22.9141H83.3464V27.9053C83.3464 28.6807 83.6912 29.042 84.448 29.042C84.6524 29.0384 84.8564 29.0241 85.0593 28.999V30.4619C84.719 30.5255 84.3732 30.5543 84.0271 30.5478C82.1941 30.5478 81.4792 29.8593 81.4792 28.1035V22.9141H80.1628V21.4424H81.4792V19.2998H83.3464Z"
                  fill="white"
                ></path>
                <path
                  d="M86.0652 25.9697C86.0652 23.1211 87.7429 21.3311 90.3591 21.3311C92.9841 21.3311 94.6541 23.1211 94.6541 25.9697C94.6541 28.8262 92.9929 30.6084 90.3591 30.6084C87.7263 30.6084 86.0652 28.8262 86.0652 25.9697ZM92.7605 25.9697C92.7605 24.0156 91.865 22.8623 90.3591 22.8623C88.8533 22.8623 87.9587 24.0244 87.9587 25.9697C87.9587 27.9316 88.8533 29.0762 90.3591 29.0762C91.865 29.0762 92.7605 27.9316 92.7605 25.9697H92.7605Z"
                  fill="white"
                ></path>
                <path
                  d="M96.1863 21.4425H97.9587V22.9835H98.0017C98.1217 22.5022 98.4036 22.0769 98.8002 21.779C99.1968 21.4811 99.6838 21.3288 100.179 21.3478C100.394 21.347 100.607 21.3703 100.816 21.4171V23.1554C100.546 23.0728 100.264 23.0348 99.9812 23.0431C99.7112 23.0321 99.4421 23.0797 99.1922 23.1826C98.9424 23.2855 98.7178 23.4412 98.5338 23.6391C98.3498 23.837 98.2108 24.0724 98.1264 24.3291C98.042 24.5857 98.0141 24.8576 98.0447 25.1261V30.4962H96.1863L96.1863 21.4425Z"
                  fill="white"
                ></path>
                <path
                  d="M109.385 27.8369C109.135 29.4805 107.534 30.6084 105.486 30.6084C102.852 30.6084 101.218 28.8437 101.218 26.0127C101.218 23.1729 102.861 21.3311 105.408 21.3311C107.913 21.3311 109.488 23.0518 109.488 25.7969V26.4336H103.094V26.5459C103.064 26.8791 103.106 27.2148 103.216 27.5306C103.326 27.8464 103.502 28.1352 103.733 28.3778C103.963 28.6203 104.242 28.8111 104.552 28.9374C104.862 29.0637 105.195 29.1226 105.529 29.1103C105.968 29.1515 106.409 29.0498 106.786 28.8203C107.162 28.5909 107.455 28.246 107.62 27.8369L109.385 27.8369ZM103.102 25.1348H107.629C107.645 24.8352 107.6 24.5354 107.495 24.2541C107.391 23.9729 107.229 23.7164 107.02 23.5006C106.812 23.2849 106.561 23.1145 106.284 23.0003C106.006 22.8861 105.708 22.8305 105.408 22.8369C105.105 22.8351 104.805 22.8933 104.525 23.008C104.245 23.1227 103.991 23.2918 103.776 23.5054C103.562 23.7191 103.392 23.973 103.276 24.2527C103.161 24.5323 103.102 24.8321 103.102 25.1348V25.1348Z"
                  fill="white"
                ></path>
                <path
                  d="M37.8262 8.73065C38.2158 8.70269 38.6067 8.76155 38.9709 8.90298C39.335 9.04441 39.6632 9.26489 39.9317 9.54852C40.2003 9.83214 40.4026 10.1718 40.524 10.5431C40.6454 10.9144 40.6829 11.308 40.6338 11.6955C40.6338 13.6017 39.6035 14.6975 37.8262 14.6975H35.6709V8.73065H37.8262ZM36.5976 13.8536H37.7226C38.0011 13.8703 38.2797 13.8246 38.5382 13.72C38.7967 13.6154 39.0287 13.4545 39.2172 13.2489C39.4057 13.0433 39.546 12.7983 39.6278 12.5317C39.7097 12.2651 39.7311 11.9836 39.6904 11.7076C39.7281 11.4328 39.7046 11.153 39.6215 10.8884C39.5383 10.6237 39.3977 10.3807 39.2096 10.1768C39.0216 9.97285 38.7907 9.81304 38.5337 9.70881C38.2766 9.60457 37.9996 9.55849 37.7226 9.57386H36.5976V13.8536Z"
                  fill="white"
                ></path>
                <path
                  d="M41.6807 12.444C41.6524 12.1481 41.6862 11.8496 41.7801 11.5675C41.8739 11.2854 42.0257 11.0261 42.2256 10.8061C42.4256 10.5861 42.6693 10.4103 42.9411 10.2901C43.213 10.1698 43.507 10.1077 43.8042 10.1077C44.1015 10.1077 44.3955 10.1698 44.6673 10.2901C44.9392 10.4103 45.1829 10.5861 45.3828 10.8061C45.5828 11.0261 45.7345 11.2854 45.8284 11.5675C45.9222 11.8496 45.9561 12.1481 45.9278 12.444C45.9566 12.7403 45.9232 13.0392 45.8296 13.3218C45.736 13.6043 45.5843 13.8641 45.3843 14.0845C45.1843 14.3049 44.9404 14.4811 44.6683 14.6016C44.3962 14.7221 44.1019 14.7844 43.8042 14.7844C43.5066 14.7844 43.2123 14.7221 42.9402 14.6016C42.668 14.4811 42.4241 14.3049 42.2241 14.0845C42.0242 13.8641 41.8725 13.6043 41.7789 13.3218C41.6853 13.0392 41.6519 12.7403 41.6807 12.444ZM45.0137 12.444C45.0137 11.468 44.5752 10.8972 43.8057 10.8972C43.0332 10.8972 42.5987 11.468 42.5987 12.4441C42.5987 13.4279 43.0333 13.9943 43.8057 13.9943C44.5752 13.9943 45.0137 13.424 45.0137 12.444H45.0137Z"
                  fill="white"
                ></path>
                <path
                  d="M51.5732 14.6975H50.6514L49.7207 11.3811H49.6504L48.7236 14.6975H47.8105L46.5693 10.1946H47.4707L48.2773 13.6306H48.3438L49.2695 10.1946H50.1221L51.0479 13.6306H51.1182L51.9209 10.1946H52.8096L51.5732 14.6975Z"
                  fill="white"
                ></path>
                <path
                  d="M53.8535 10.1946H54.709V10.91H54.7754C54.888 10.653 55.0781 10.4377 55.3189 10.2939C55.5598 10.15 55.8395 10.085 56.1191 10.1077C56.3382 10.0912 56.5582 10.1243 56.7628 10.2044C56.9674 10.2845 57.1514 10.4096 57.3011 10.5704C57.4508 10.7313 57.5623 10.9237 57.6275 11.1335C57.6927 11.3434 57.7099 11.5652 57.6777 11.7825V14.6975H56.7891V12.0057C56.7891 11.282 56.4746 10.9222 55.8174 10.9222C55.6686 10.9152 55.5201 10.9406 55.3821 10.9964C55.244 11.0522 55.1197 11.1372 55.0175 11.2456C54.9154 11.354 54.8379 11.4832 54.7904 11.6243C54.7429 11.7655 54.7264 11.9152 54.7422 12.0633V14.6976H53.8535L53.8535 10.1946Z"
                  fill="white"
                ></path>
                <path
                  d="M59.0938 8.43677H59.9824V14.6975H59.0938V8.43677Z"
                  fill="white"
                ></path>
                <path
                  d="M61.2178 12.4441C61.1895 12.1482 61.2234 11.8496 61.3172 11.5675C61.4111 11.2854 61.5629 11.0261 61.7628 10.8061C61.9628 10.5861 62.2065 10.4104 62.4784 10.2901C62.7503 10.1698 63.0443 10.1077 63.3416 10.1077C63.6389 10.1077 63.9329 10.1698 64.2047 10.2901C64.4766 10.4104 64.7203 10.5861 64.9203 10.8061C65.1203 11.0261 65.272 11.2854 65.3659 11.5675C65.4598 11.8496 65.4936 12.1482 65.4653 12.4441C65.4942 12.7404 65.4607 13.0393 65.3671 13.3219C65.2734 13.6044 65.1217 13.8642 64.9217 14.0846C64.7217 14.305 64.4778 14.4811 64.2057 14.6017C63.9335 14.7222 63.6392 14.7845 63.3416 14.7845C63.0439 14.7845 62.7496 14.7222 62.4775 14.6017C62.2053 14.4811 61.9614 14.305 61.7614 14.0846C61.5614 13.8642 61.4097 13.6044 61.3161 13.3219C61.2225 13.0393 61.189 12.7404 61.2178 12.4441ZM64.5508 12.4441C64.5508 11.4681 64.1123 10.8973 63.3428 10.8973C62.5703 10.8973 62.1358 11.4681 62.1358 12.4441C62.1358 13.428 62.5704 13.9944 63.3428 13.9944C64.1123 13.9944 64.5508 13.4241 64.5508 12.4441H64.5508Z"
                  fill="white"
                ></path>
                <path
                  d="M66.4009 13.4241C66.4009 12.6135 67.0044 12.1462 68.0757 12.0798L69.2954 12.0095V11.6208C69.2954 11.1453 68.981 10.8767 68.3735 10.8767C67.8774 10.8767 67.5337 11.0588 67.4351 11.3772H66.5747C66.6655 10.6038 67.3931 10.1077 68.4146 10.1077C69.5435 10.1077 70.1802 10.6697 70.1802 11.6208V14.6975H69.3247V14.0647H69.2544C69.1117 14.2917 68.9113 14.4767 68.6737 14.6009C68.436 14.7252 68.1697 14.7841 67.9019 14.7717C67.7128 14.7914 67.5218 14.7712 67.341 14.7125C67.1602 14.6538 66.9938 14.5579 66.8524 14.4309C66.711 14.3039 66.5977 14.1487 66.52 13.9753C66.4422 13.8019 66.4016 13.6141 66.4009 13.4241ZM69.2954 13.0393V12.6628L68.1958 12.7331C67.5757 12.7746 67.2944 12.9856 67.2944 13.3826C67.2944 13.7878 67.646 14.0237 68.1294 14.0237C68.2711 14.038 68.4142 14.0237 68.5502 13.9816C68.6862 13.9395 68.8123 13.8705 68.9211 13.7787C69.0299 13.6868 69.1191 13.574 69.1834 13.447C69.2477 13.32 69.2858 13.1813 69.2954 13.0393Z"
                  fill="white"
                ></path>
                <path
                  d="M71.3481 12.4441C71.3481 11.0213 72.0796 10.1199 73.2173 10.1199C73.4987 10.1069 73.778 10.1743 74.0225 10.3142C74.267 10.4541 74.4667 10.6607 74.5981 10.9099H74.6646V8.43677H75.5532V14.6975H74.7017V13.9861H74.6314C74.4897 14.2336 74.2831 14.4376 74.0339 14.5761C73.7846 14.7146 73.5022 14.7822 73.2173 14.7717C72.0718 14.7718 71.3481 13.8704 71.3481 12.4441ZM72.2661 12.4441C72.2661 13.3992 72.7163 13.9739 73.4693 13.9739C74.2183 13.9739 74.6812 13.3909 74.6812 12.448C74.6812 11.5095 74.2134 10.9182 73.4693 10.9182C72.7212 10.9182 72.2661 11.4968 72.2661 12.4441H72.2661Z"
                  fill="white"
                ></path>
                <path
                  d="M79.23 12.444C79.2017 12.1481 79.2356 11.8496 79.3294 11.5675C79.4232 11.2854 79.575 11.0261 79.7749 10.8061C79.9749 10.5861 80.2186 10.4103 80.4904 10.2901C80.7623 10.1698 81.0563 10.1077 81.3536 10.1077C81.6508 10.1077 81.9448 10.1698 82.2167 10.2901C82.4885 10.4103 82.7322 10.5861 82.9322 10.8061C83.1321 11.0261 83.2839 11.2854 83.3777 11.5675C83.4715 11.8496 83.5054 12.1481 83.4771 12.444C83.5059 12.7403 83.4725 13.0392 83.3789 13.3218C83.2853 13.6043 83.1336 13.8641 82.9336 14.0845C82.7336 14.3049 82.4897 14.4811 82.2176 14.6016C81.9455 14.7221 81.6512 14.7844 81.3536 14.7844C81.0559 14.7844 80.7616 14.7221 80.4895 14.6016C80.2173 14.4811 79.9735 14.3049 79.7735 14.0845C79.5735 13.8641 79.4218 13.6043 79.3282 13.3218C79.2346 13.0392 79.2012 12.7403 79.23 12.444ZM82.563 12.444C82.563 11.468 82.1245 10.8972 81.355 10.8972C80.5826 10.8972 80.148 11.468 80.148 12.4441C80.148 13.4279 80.5826 13.9943 81.355 13.9943C82.1245 13.9943 82.563 13.424 82.563 12.444Z"
                  fill="white"
                ></path>
                <path
                  d="M84.6694 10.1946H85.5249V10.91H85.5913C85.704 10.653 85.894 10.4377 86.1348 10.2939C86.3757 10.15 86.6555 10.085 86.9351 10.1077C87.1542 10.0912 87.3742 10.1243 87.5788 10.2044C87.7834 10.2845 87.9673 10.4096 88.117 10.5704C88.2667 10.7313 88.3783 10.9237 88.4435 11.1335C88.5087 11.3434 88.5258 11.5652 88.4937 11.7825V14.6975H87.605V12.0057C87.605 11.282 87.2905 10.9222 86.6333 10.9222C86.4846 10.9152 86.336 10.9406 86.198 10.9964C86.0599 11.0522 85.9356 11.1372 85.8335 11.2456C85.7313 11.354 85.6539 11.4832 85.6063 11.6243C85.5588 11.7655 85.5423 11.9152 85.5581 12.0633V14.6976H84.6694V10.1946Z"
                  fill="white"
                ></path>
                <path
                  d="M93.5151 9.07349V10.2151H94.4907V10.9636H93.5151V13.2791C93.5151 13.7507 93.7095 13.9573 94.1519 13.9573C94.2651 13.9569 94.3783 13.9501 94.4907 13.9368V14.677C94.3311 14.7055 94.1694 14.7207 94.0073 14.7224C93.019 14.7224 92.6255 14.3747 92.6255 13.5066V10.9636H91.9106V10.215H92.6255V9.07349H93.5151Z"
                  fill="white"
                ></path>
                <path
                  d="M95.7046 8.43677H96.5854V10.9182H96.6558C96.7739 10.6589 96.9691 10.4423 97.2148 10.298C97.4605 10.1536 97.7447 10.0885 98.0288 10.1116C98.2467 10.0997 98.4646 10.1361 98.6669 10.2181C98.8692 10.3002 99.0508 10.4259 99.199 10.5862C99.3471 10.7465 99.458 10.9376 99.5238 11.1457C99.5896 11.3539 99.6086 11.5739 99.5795 11.7903V14.6975H98.69V12.0095C98.69 11.2903 98.355 10.926 97.7271 10.926C97.5743 10.9135 97.4207 10.9345 97.2769 10.9875C97.1332 11.0406 97.0027 11.1244 96.8947 11.2332C96.7867 11.3419 96.7038 11.4729 96.6517 11.6171C96.5997 11.7612 96.5797 11.915 96.5933 12.0676V14.6975H95.7046L95.7046 8.43677Z"
                  fill="white"
                ></path>
                <path
                  d="M104.761 13.4818C104.64 13.8933 104.379 14.2493 104.022 14.4874C103.665 14.7256 103.236 14.8307 102.81 14.7845C102.513 14.7923 102.218 14.7355 101.946 14.618C101.673 14.5004 101.43 14.325 101.232 14.1039C101.034 13.8827 100.887 13.6212 100.8 13.3374C100.713 13.0535 100.689 12.7543 100.73 12.4603C100.69 12.1654 100.715 11.8655 100.801 11.5808C100.888 11.2961 101.034 11.0334 101.231 10.8103C101.428 10.5872 101.671 10.409 101.942 10.2878C102.214 10.1666 102.509 10.1052 102.806 10.1077C104.059 10.1077 104.815 10.9637 104.815 12.3777V12.6878H101.635V12.7376C101.621 12.9029 101.642 13.0692 101.696 13.226C101.75 13.3827 101.837 13.5264 101.949 13.6479C102.062 13.7693 102.199 13.8658 102.352 13.9312C102.504 13.9966 102.669 14.0295 102.834 14.0276C103.047 14.0532 103.262 14.0149 103.453 13.9177C103.644 13.8205 103.801 13.6687 103.906 13.4817L104.761 13.4818ZM101.635 12.0306H103.91C103.921 11.8795 103.9 11.7277 103.849 11.5849C103.798 11.4422 103.718 11.3117 103.614 11.2019C103.509 11.092 103.383 11.0052 103.243 10.9471C103.103 10.8889 102.953 10.8606 102.801 10.8641C102.647 10.8622 102.495 10.891 102.353 10.949C102.21 11.0069 102.081 11.0928 101.972 11.2015C101.864 11.3102 101.778 11.4396 101.72 11.582C101.662 11.7244 101.633 11.8769 101.635 12.0306H101.635Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_app_papaa_plaay">
                  <rect width="119.664" height="40" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to={'/'}>
            <svg className={styles.android} viewBox="0 0 135 40" fill="none">
              <path
                d="M130 0H5C2.23858 0 0 2.23858 0 5V35C0 37.7614 2.23858 40 5 40H130C132.761 40 135 37.7614 135 35V5C135 2.23858 132.761 0 130 0Z"
                fill="black"
              ></path>
              <path
                d="M130 0.8C131.114 0.8 132.182 1.2425 132.97 2.03015C133.758 2.8178 134.2 3.88609 134.2 5V35C134.2 36.1139 133.758 37.1822 132.97 37.9698C132.182 38.7575 131.114 39.2 130 39.2H5C3.88609 39.2 2.8178 38.7575 2.03015 37.9698C1.2425 37.1822 0.8 36.1139 0.8 35V5C0.8 3.88609 1.2425 2.8178 2.03015 2.03015C2.8178 1.2425 3.88609 0.8 5 0.8H130ZM130 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H130C131.326 40 132.598 39.4732 133.536 38.5355C134.473 37.5979 135 36.3261 135 35V5C135 3.67392 134.473 2.40215 133.536 1.46447C132.598 0.526784 131.326 0 130 0V0Z"
                fill="#A6A6A6"
              ></path>
              <path
                d="M47.4201 10.24C47.4365 10.6067 47.3785 10.973 47.2496 11.3167C47.1208 11.6604 46.9236 11.9745 46.6701 12.24C46.386 12.5333 46.0432 12.7633 45.6641 12.9149C45.285 13.0666 44.8781 13.1364 44.4701 13.12C44.0598 13.1291 43.6519 13.054 43.2718 12.8992C42.8916 12.7444 42.5473 12.5132 42.2601 12.22C41.9638 11.9325 41.7301 11.5869 41.5735 11.2049C41.4169 10.8229 41.3409 10.4127 41.3501 9.99997C41.3395 9.58557 41.4149 9.17346 41.5715 8.78964C41.7281 8.40583 41.9626 8.05864 42.2601 7.76997C42.7056 7.33466 43.2698 7.04071 43.8819 6.92506C44.4939 6.80942 45.1265 6.87723 45.7001 7.11997C46.0607 7.26821 46.3823 7.49746 46.6401 7.78997L46.1101 8.31997C45.9115 8.08075 45.6599 7.89111 45.3752 7.76613C45.0905 7.64114 44.7806 7.58425 44.4701 7.59997C44.1578 7.59844 43.8483 7.66 43.5603 7.78096C43.2723 7.90193 43.0117 8.0798 42.7941 8.30391C42.5766 8.52803 42.4065 8.79378 42.2941 9.08522C42.1817 9.37666 42.1293 9.6878 42.1401 9.99997C42.1336 10.4661 42.2652 10.9237 42.5184 11.3151C42.7717 11.7065 43.1352 12.0142 43.563 12.1992C43.9909 12.3843 44.464 12.4385 44.9227 12.355C45.3813 12.2715 45.8049 12.054 46.1401 11.73C46.4485 11.396 46.6291 10.964 46.6501 10.51H44.4701V9.78997H47.3801C47.4025 9.93903 47.4158 10.0893 47.4201 10.24Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M52 7.74H49.3V9.64H51.76V10.36H49.3V12.26H52V13H48.52V7H52V7.74Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M55.2801 13H54.5101V7.74H52.8301V7H57.0001V7.74H55.2801V13Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M59.9399 13V7H60.7099V13H59.9399Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M64.1299 13H63.3599V7.74H61.6799V7H65.7999V7.74H64.1299V13Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M73.6099 12.2199C73.3211 12.509 72.9781 12.7383 72.6006 12.8947C72.2231 13.0512 71.8185 13.1317 71.4099 13.1317C71.0013 13.1317 70.5967 13.0512 70.2192 12.8947C69.8417 12.7383 69.4987 12.509 69.2099 12.2199C68.919 11.9298 68.6909 11.5831 68.5395 11.2012C68.3881 10.8194 68.3168 10.4105 68.3299 9.9999C68.3168 9.58933 68.3881 9.18044 68.5395 8.79856C68.6909 8.41669 68.919 8.06998 69.2099 7.7799C69.4925 7.4827 69.8343 7.24813 70.2133 7.09138C70.5923 6.93462 70.9999 6.85917 71.4099 6.8699C71.8193 6.86342 72.2257 6.94082 72.604 7.09732C72.9824 7.25382 73.3247 7.48612 73.6099 7.7799C73.8974 8.07239 74.1235 8.41953 74.2746 8.80083C74.4257 9.18212 74.499 9.58984 74.4899 9.9999C74.503 10.4105 74.4317 10.8194 74.2803 11.2012C74.1289 11.5831 73.9008 11.9298 73.6099 12.2199ZM69.7799 11.7199C69.9929 11.9358 70.2467 12.1072 70.5265 12.2242C70.8063 12.3412 71.1066 12.4014 71.4099 12.4014C71.7132 12.4014 72.0135 12.3412 72.2933 12.2242C72.5731 12.1072 72.8269 11.9358 73.0399 11.7199C73.2614 11.4929 73.4349 11.2236 73.55 10.9281C73.6652 10.6326 73.7195 10.3169 73.7099 9.9999C73.7143 9.68005 73.6536 9.36265 73.5316 9.06697C73.4095 8.77129 73.2286 8.50351 72.9999 8.2799C72.7869 8.06402 72.5331 7.89261 72.2533 7.77562C71.9735 7.65862 71.6732 7.59838 71.3699 7.59838C71.0666 7.59838 70.7663 7.65862 70.4865 7.77562C70.2067 7.89261 69.9529 8.06402 69.7399 8.2799C69.5256 8.51014 69.3594 8.78091 69.2512 9.07628C69.143 9.37166 69.095 9.68569 69.1099 9.9999C69.1003 10.3169 69.1546 10.6326 69.2698 10.9281C69.3849 11.2236 69.5584 11.4929 69.7799 11.7199Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M75.5801 13V7H76.5101L79.4301 11.67V10.51V7H80.2001V13H79.4001L76.3501 8.11V9.26V13H75.5801Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M68.1401 21.7499C67.2976 21.7519 66.4745 22.0037 65.7751 22.4734C65.0756 22.9432 64.5312 23.6098 64.2106 24.3889C63.89 25.1681 63.8076 26.0248 63.9739 26.8508C64.1402 27.6768 64.5477 28.4349 65.1449 29.0292C65.7421 29.6236 66.5021 30.0276 67.3288 30.19C68.1556 30.3524 69.0119 30.2661 69.7896 29.9418C70.5672 29.6175 71.2313 29.07 71.6977 28.3683C72.1642 27.6667 72.4121 26.8425 72.4101 25.9999C72.4183 25.4379 72.3132 24.8799 72.1013 24.3593C71.8893 23.8386 71.5748 23.366 71.1764 22.9694C70.7779 22.5729 70.3038 22.2606 69.7822 22.051C69.2606 21.8415 68.7021 21.7391 68.1401 21.7499ZM68.1401 28.5799C67.6237 28.616 67.1083 28.496 66.6611 28.2353C66.2138 27.9747 65.8553 27.5855 65.6321 27.1184C65.409 26.6512 65.3315 26.1278 65.4098 25.6161C65.4881 25.1043 65.7185 24.628 66.0711 24.249C66.4237 23.8699 66.8821 23.6057 67.3869 23.4907C67.8916 23.3757 68.4193 23.4152 68.9013 23.604C69.3833 23.7929 69.7973 24.1223 70.0896 24.5496C70.3819 24.9769 70.5388 25.4822 70.5401 25.9999C70.5562 26.3279 70.5065 26.6559 70.3938 26.9643C70.2812 27.2728 70.1079 27.5556 69.8842 27.7961C69.6606 28.0366 69.391 28.2298 69.0914 28.3644C68.7919 28.499 68.4684 28.5723 68.1401 28.5799ZM58.8201 21.7499C57.9776 21.7519 57.1545 22.0037 56.4551 22.4734C55.7556 22.9432 55.2112 23.6098 54.8906 24.3889C54.57 25.1681 54.4876 26.0248 54.6539 26.8508C54.8202 27.6768 55.2277 28.4349 55.8249 29.0292C56.4221 29.6236 57.1821 30.0276 58.0088 30.19C58.8356 30.3524 59.6919 30.2661 60.4696 29.9418C61.2472 29.6175 61.9113 29.07 62.3777 28.3683C62.8442 27.6667 63.0921 26.8425 63.0901 25.9999C63.0983 25.4379 62.9932 24.8799 62.7813 24.3593C62.5693 23.8386 62.2548 23.366 61.8564 22.9694C61.4579 22.5729 60.9838 22.2606 60.4622 22.051C59.9406 21.8415 59.3821 21.7391 58.8201 21.7499ZM58.8201 28.5799C58.3037 28.616 57.7883 28.496 57.3411 28.2353C56.8938 27.9747 56.5353 27.5855 56.3121 27.1184C56.089 26.6512 56.0115 26.1278 56.0898 25.6161C56.1681 25.1043 56.3985 24.628 56.7511 24.249C57.1037 23.8699 57.5621 23.6057 58.0669 23.4907C58.5716 23.3757 59.0993 23.4152 59.5813 23.604C60.0633 23.7929 60.4773 24.1223 60.7696 24.5496C61.0619 24.9769 61.2188 25.4822 61.2201 25.9999C61.2362 26.3279 61.1865 26.6559 61.0738 26.9643C60.9612 27.2728 60.7879 27.5556 60.5642 27.7961C60.3406 28.0366 60.071 28.2298 59.7714 28.3644C59.4719 28.499 59.1484 28.5723 58.8201 28.5799ZM47.7401 23.0599V24.8599H52.0601C51.9924 25.7077 51.6399 26.5077 51.0601 27.1299C50.6268 27.5714 50.1056 27.9171 49.5302 28.1444C48.9549 28.3718 48.3382 28.4759 47.7201 28.4499C46.4471 28.4499 45.2262 27.9442 44.326 27.044C43.4258 26.1439 42.9201 24.923 42.9201 23.6499C42.9201 22.3769 43.4258 21.156 44.326 20.2558C45.2262 19.3556 46.4471 18.8499 47.7201 18.8499C48.9405 18.8318 50.119 19.2952 51.0001 20.1399L52.2701 18.8699C51.6741 18.2804 50.9664 17.8158 50.1886 17.5033C49.4107 17.1908 48.5783 17.0366 47.7401 17.0499C46.8511 17.0153 45.9643 17.1605 45.1327 17.4769C44.3012 17.7932 43.5421 18.2742 42.9009 18.8909C42.2596 19.5077 41.7495 20.2475 41.4011 21.0661C41.0527 21.8847 40.873 22.7652 40.873 23.6549C40.873 24.5446 41.0527 25.4251 41.4011 26.2437C41.7495 27.0623 42.2596 27.8022 42.9009 28.4189C43.5421 29.0357 44.3012 29.5166 45.1327 29.833C45.9643 30.1493 46.8511 30.2945 47.7401 30.2599C48.5955 30.2941 49.4485 30.1469 50.243 29.8281C51.0375 29.5092 51.7556 29.0259 52.3501 28.4099C53.4002 27.2563 53.9598 25.7391 53.9101 24.1799C53.9137 23.8046 53.8836 23.4298 53.8201 23.0599H47.7401ZM93.0501 24.4599C92.7893 23.6927 92.3016 23.0227 91.6516 22.5388C91.0016 22.0548 90.2199 21.7797 89.4101 21.7499C88.8631 21.7489 88.3217 21.86 87.8193 22.0765C87.317 22.2929 86.8644 22.6101 86.4895 23.0085C86.1146 23.4068 85.8254 23.8778 85.6397 24.3923C85.4541 24.9068 85.3759 25.454 85.4101 25.9999C85.4016 26.9128 85.6885 27.8039 86.2282 28.5402C86.7679 29.2765 87.5313 29.8184 88.4044 30.0851C89.2774 30.3517 90.2134 30.3288 91.0723 30.0196C91.9313 29.7105 92.6672 29.1318 93.1701 28.3699L91.7201 27.3699C91.5039 27.7302 91.1974 28.0277 90.8307 28.2329C90.4641 28.4382 90.0502 28.544 89.6301 28.5399C89.1967 28.5578 88.768 28.4442 88.4003 28.214C88.0327 27.9837 87.7432 27.6477 87.5701 27.2499L93.2601 24.8999L93.0501 24.4599ZM87.2501 25.8799C87.2298 25.5698 87.2718 25.2588 87.3736 24.9651C87.4753 24.6715 87.6348 24.4012 87.8426 24.1701C88.0504 23.939 88.3023 23.7518 88.5835 23.6195C88.8647 23.4873 89.1696 23.4126 89.4801 23.3999C89.8012 23.3794 90.1213 23.4537 90.4005 23.6138C90.6796 23.7738 90.9056 24.0124 91.0501 24.2999L87.2501 25.8799ZM82.6301 29.9999H84.5001V17.4999H82.6301V29.9999ZM79.5701 22.6999H79.5001C79.2162 22.3909 78.8694 22.1462 78.483 21.9823C78.0966 21.8185 77.6796 21.7392 77.2601 21.7499C76.1673 21.8029 75.1367 22.2743 74.3821 23.0665C73.6274 23.8587 73.2064 24.9108 73.2064 26.0049C73.2064 27.099 73.6274 28.1512 74.3821 28.9433C75.1367 29.7355 76.1673 30.2069 77.2601 30.2599C77.6841 30.2684 78.1047 30.1832 78.4919 30.0103C78.8791 29.8375 79.2234 29.5812 79.5001 29.2599H79.5701V29.8699C79.5701 31.4999 78.7001 32.3699 77.3001 32.3699C76.8324 32.3596 76.3783 32.2106 75.9955 31.9418C75.6127 31.6729 75.3185 31.2964 75.1501 30.8599L73.5301 31.5299C73.8296 32.2822 74.3504 32.9258 75.0235 33.3758C75.6966 33.8257 76.4905 34.0608 77.3001 34.0499C79.4901 34.0499 81.3001 32.7599 81.3001 29.6199V21.9999H79.5701V22.6999ZM77.4201 28.5799C76.7649 28.5391 76.1499 28.25 75.7004 27.7716C75.2509 27.2932 75.0006 26.6614 75.0006 26.0049C75.0006 25.3485 75.2509 24.7167 75.7004 24.2383C76.1499 23.7598 76.7649 23.4708 77.4201 23.4299C77.7403 23.4437 78.0545 23.5218 78.344 23.6596C78.6334 23.7973 78.8922 23.9918 79.1049 24.2316C79.3176 24.4714 79.4799 24.7515 79.5822 25.0553C79.6844 25.3591 79.7245 25.6803 79.7001 25.9999C79.7274 26.3206 79.6893 26.6435 79.5883 26.9491C79.4872 27.2546 79.3252 27.5365 79.1121 27.7777C78.8989 28.0189 78.6391 28.2143 78.3483 28.3522C78.0575 28.4901 77.7417 28.5676 77.4201 28.5799ZM101.81 17.4999H97.3301V29.9999H99.2001V25.2599H101.81C102.343 25.2982 102.878 25.2263 103.382 25.0486C103.886 24.871 104.348 24.5915 104.739 24.2274C105.13 23.8634 105.442 23.4227 105.655 22.9328C105.869 22.4428 105.979 21.9142 105.979 21.3799C105.979 20.8456 105.869 20.317 105.655 19.8271C105.442 19.3372 105.13 18.8965 104.739 18.5324C104.348 18.1684 103.886 17.8888 103.382 17.7112C102.878 17.5336 102.343 17.4616 101.81 17.4999ZM101.81 23.4999H99.2001V19.2399H101.85C102.418 19.2399 102.962 19.4654 103.363 19.8667C103.765 20.268 103.99 20.8124 103.99 21.3799C103.99 21.9475 103.765 22.4918 103.363 22.8931C102.962 23.2945 102.418 23.5199 101.85 23.5199L101.81 23.4999ZM113.35 21.7099C112.669 21.6679 111.991 21.8265 111.399 22.1659C110.807 22.5054 110.328 23.0109 110.02 23.6199L111.67 24.3099C111.837 24.0093 112.087 23.7634 112.39 23.6019C112.694 23.4405 113.038 23.3703 113.38 23.3999C113.617 23.3722 113.858 23.392 114.088 23.4582C114.317 23.5245 114.531 23.6358 114.718 23.7856C114.904 23.9355 115.058 24.1209 115.172 24.3311C115.286 24.5413 115.356 24.7721 115.38 25.0099V25.1299C114.779 24.8138 114.109 24.6491 113.43 24.6499C111.65 24.6499 109.83 25.6499 109.83 27.4699C109.848 27.8568 109.943 28.2361 110.11 28.5855C110.277 28.9348 110.513 29.247 110.803 29.5035C111.093 29.7601 111.432 29.9557 111.799 30.0787C112.166 30.2018 112.554 30.2498 112.94 30.2199C113.409 30.2459 113.877 30.1466 114.295 29.9322C114.714 29.7178 115.067 29.3961 115.32 28.9999H115.38V29.9999H117.18V25.1899C117.18 22.9999 115.52 21.7299 113.39 21.7299L113.35 21.7099ZM113.12 28.5599C112.51 28.5599 111.66 28.2499 111.66 27.4999C111.66 26.4999 112.72 26.1599 113.66 26.1599C114.254 26.1453 114.841 26.2903 115.36 26.5799C115.297 27.123 115.04 27.6249 114.635 27.9926C114.231 28.3604 113.707 28.569 113.16 28.5799L113.12 28.5599ZM123.74 21.9999L121.6 27.4199H121.54L119.32 21.9999H117.32L120.65 29.5799L118.75 33.7899H120.75L125.82 21.9999H123.74ZM106.94 29.9999H108.8V17.4999H106.94V29.9999Z"
                fill="white"
              ></path>
              <path
                d="M10.4399 7.53997C10.1212 7.93403 9.96391 8.43441 9.99994 8.93997V31.06C9.96591 31.5704 10.1348 32.0735 10.4699 32.46L10.5399 32.54L22.8999 20.15V19.85L10.5099 7.46997L10.4399 7.53997Z"
                fill="url(#paint0_linear_app_goog_lld)"
              ></path>
              <path
                d="M26.9999 24.28L22.8999 20.15V19.85L26.9999 15.72L27.0899 15.78L31.9999 18.56C33.3999 19.35 33.3999 20.65 31.9999 21.45L27.1099 24.23L26.9999 24.28Z"
                fill="url(#paint1_linear_app_goog_lld)"
              ></path>
              <path
                d="M27.1199 24.23L22.8999 20L10.4399 32.46C10.7225 32.7115 11.0842 32.8562 11.4623 32.869C11.8404 32.8818 12.211 32.7619 12.5099 32.53L27.1199 24.23Z"
                fill="url(#paint2_linear_app_goog_lld)"
              ></path>
              <path
                d="M27.1199 15.78L12.5099 7.47997C12.213 7.24488 11.8426 7.12203 11.464 7.133C11.0854 7.14397 10.7228 7.28808 10.4399 7.53997L22.8999 20L27.1199 15.78Z"
                fill="url(#paint3_linear_app_goog_lld)"
              ></path>
              <path
                opacity="0.2"
                d="M26.9999 24.1299L12.5099 32.3799C12.2219 32.5973 11.8708 32.7149 11.5099 32.7149C11.1491 32.7149 10.798 32.5973 10.5099 32.3799L10.4399 32.4499L10.5099 32.5299C10.798 32.7473 11.1491 32.8649 11.5099 32.8649C11.8708 32.8649 12.2219 32.7473 12.5099 32.5299L27.1199 24.2299L26.9999 24.1299Z"
                fill="black"
              ></path>
              <path
                opacity="0.12"
                d="M10.4399 32.3199C10.1187 31.9233 9.96126 31.4188 9.99988 30.9099V31.0599C9.96585 31.5703 10.1348 32.0735 10.4699 32.4599L10.5399 32.3899L10.4399 32.3199Z"
                fill="black"
              ></path>
              <path
                opacity="0.12"
                d="M32 21.3L27 24.13L27.09 24.23L32 21.44C32.2898 21.3174 32.5413 21.119 32.7278 20.8656C32.9143 20.6122 33.0291 20.3132 33.06 20C32.9975 20.2846 32.869 20.5505 32.6849 20.7763C32.5007 21.0021 32.2662 21.1815 32 21.3Z"
                fill="black"
              ></path>
              <path
                opacity="0.25"
                d="M12.51 7.61998L32 18.7C32.2662 18.8185 32.5007 18.9979 32.6849 19.2237C32.869 19.4495 32.9975 19.7154 33.06 20C33.0291 19.6868 32.9143 19.3878 32.7278 19.1344C32.5413 18.881 32.2898 18.6825 32 18.56L12.51 7.47998C11.12 6.67998 10 7.33998 10 8.93998V9.08998C10 7.48998 11.12 6.82998 12.51 7.61998Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_app_goog_lld"
                  x1="21.7999"
                  y1="8.70997"
                  x2="5.01993"
                  y2="25.49"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A0FF"></stop>
                  <stop offset="0.01" stopColor="#00A1FF"></stop>
                  <stop offset="0.26" stopColor="#00BEFF"></stop>
                  <stop offset="0.51" stopColor="#00D2FF"></stop>
                  <stop offset="0.76" stopColor="#00DFFF"></stop>
                  <stop offset="1" stopColor="#00E3FF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_app_goog_lld"
                  x1="33.8299"
                  y1="20"
                  x2="9.6399"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE000"></stop>
                  <stop offset="0.41" stopColor="#FFBD00"></stop>
                  <stop offset="0.78" stopColor="#FFA500"></stop>
                  <stop offset="1" stopColor="#FF9C00"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_app_goog_lld"
                  x1="24.8299"
                  y1="22.3"
                  x2="2.06994"
                  y2="45.05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF3A44"></stop>
                  <stop offset="1" stopColor="#C31162"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_app_goog_lld"
                  x1="7.29994"
                  y1="0.179969"
                  x2="17.4599"
                  y2="10.34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#32A071"></stop>
                  <stop offset="0.07" stopColor="#2DA771"></stop>
                  <stop offset="0.48" stopColor="#15CF74"></stop>
                  <stop offset="0.8" stopColor="#06E775"></stop>
                  <stop offset="1" stopColor="#00F076"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
      </div>

      <div className={styles.heroImg}>
        <img src={heroImg} alt="naira notes" />
      </div>
    </div>
  );
}

export default Hero;
