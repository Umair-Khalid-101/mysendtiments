import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoardingSvg = (props) => (
  <SafeAreaView>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={390}
      height={400}
      fill="none"
      {...props}
    >
      <Path
        fill="#3DD384"
        d="M319.442 372.76c-91.053 47.712-217.772 8.178-264.793-81.556-47.021-89.733-44.554-176.4 46.498-224.112 91.052-47.712 155.302-13.63 202.323 76.103 47.021 89.734 107.024 181.853 15.972 229.565Z"
        opacity={0.1}
      />
      <G clipPath="url(#a)">
        <Path
          fill="#fff"
          d="M353.015 297.382H91.837a15 15 0 0 1-14.984-14.985V142.99a15.001 15.001 0 0 1 14.984-14.985h261.178A15 15 0 0 1 368 142.99v139.407a15.005 15.005 0 0 1-14.985 14.985Z"
        />
        <Path
          fill="#3F3D56"
          d="M353.015 297.382H91.837a15 15 0 0 1-14.984-14.985V142.99a15.001 15.001 0 0 1 14.984-14.985h261.178A15 15 0 0 1 368 142.99v139.407a15.005 15.005 0 0 1-14.985 14.985ZM91.837 128.913a14.092 14.092 0 0 0-14.076 14.077v139.407a14.093 14.093 0 0 0 14.076 14.077h261.178a14.092 14.092 0 0 0 14.077-14.077V142.99a14.092 14.092 0 0 0-14.077-14.077H91.837Z"
        />
        <Path
          fill="#CCC"
          d="M353.015 286.484H91.837a4.091 4.091 0 0 1-4.087-4.087V142.99a4.094 4.094 0 0 1 4.087-4.087h261.178a4.093 4.093 0 0 1 4.087 4.087v139.407a4.09 4.09 0 0 1-4.087 4.087ZM91.837 139.811a3.182 3.182 0 0 0-3.178 3.179v139.407a3.183 3.183 0 0 0 3.178 3.179h261.178a3.183 3.183 0 0 0 3.179-3.179V142.99a3.183 3.183 0 0 0-3.179-3.179H91.837Z"
        />
        <Path
          fill="#3F3D56"
          d="M286.542 287.148 34.084 220.225A15.005 15.005 0 0 1 23.439 201.9l35.72-134.753a15.002 15.002 0 0 1 18.324-10.645l252.458 66.923a15.005 15.005 0 0 1 10.645 18.325l-35.72 134.753a14.998 14.998 0 0 1-18.324 10.645Z"
        />
        <Path
          fill="#312F43"
          d="M286.542 287.148 34.084 220.225A15.005 15.005 0 0 1 23.439 201.9l35.72-134.753a15.002 15.002 0 0 1 18.324-10.645l252.458 66.923a15.005 15.005 0 0 1 10.645 18.325l-35.72 134.753a14.998 14.998 0 0 1-18.324 10.645ZM77.25 57.38a14.092 14.092 0 0 0-17.213 10l-35.72 134.753a14.095 14.095 0 0 0 10 17.214l252.458 66.923a14.093 14.093 0 0 0 17.214-10l35.719-134.753a14.088 14.088 0 0 0-9.999-17.214L77.25 57.38Z"
        />
        <Path
          fill="#312F43"
          d="M289.335 276.614 36.876 209.69a4.091 4.091 0 0 1-2.903-4.997L69.693 69.94a4.092 4.092 0 0 1 4.998-2.903l252.458 66.923a4.09 4.09 0 0 1 2.903 4.997l-35.72 134.753a4.09 4.09 0 0 1-4.997 2.904ZM74.458 67.914a3.182 3.182 0 0 0-3.887 2.258L34.85 204.925a3.184 3.184 0 0 0 2.258 3.887l252.459 66.924a3.183 3.183 0 0 0 3.886-2.258l35.72-134.753a3.182 3.182 0 0 0-2.258-3.887L74.458 67.914Z"
        />
        <Path
          fill="#fff"
          d="M297.163 316H35.985A15 15 0 0 1 21 301.015V161.608a15.001 15.001 0 0 1 14.985-14.985h261.178a15.004 15.004 0 0 1 14.984 14.985v139.407A15 15 0 0 1 297.163 316Z"
        />
        <Path
          fill="#E6E6E6"
          d="M226.203 304.194H57.543c-.212.001-.423-.005-.631-.017l79.769-44.925c1.519-.873 4.927-1.18 7.611-.686a6.896 6.896 0 0 1 2.111.686l53.535 30.148 2.565 1.443 23.7 13.351Z"
        />
        <Path
          fill="#E6E6E6"
          d="M279.414 304.193H133.536l28.268-13.35 2.035-.962 36.836-17.398c2.415-1.14 8.224-1.211 11.064-.215.19.068.367.139.53.215l67.145 31.71Z"
        />
        <Path
          fill="#3F3D56"
          d="M35.985 147.531a14.092 14.092 0 0 0-14.077 14.077v139.407a14.092 14.092 0 0 0 14.077 14.077h261.178a14.092 14.092 0 0 0 14.076-14.077V161.608a14.091 14.091 0 0 0-14.076-14.077H35.985Z"
        />
        <Path
          fill="#CCC"
          d="M297.163 305.102H35.985a4.092 4.092 0 0 1-4.087-4.087V161.608a4.093 4.093 0 0 1 4.087-4.087h261.178a4.09 4.09 0 0 1 4.086 4.087v139.407a4.09 4.09 0 0 1-4.086 4.087ZM35.985 158.429a3.182 3.182 0 0 0-3.179 3.179v139.407a3.183 3.183 0 0 0 3.179 3.179h261.178a3.183 3.183 0 0 0 3.178-3.179V161.608a3.183 3.183 0 0 0-3.178-3.179H35.985Z"
        />
        <Path
          fill="#FF6584"
          d="M238.969 183.038c15.524 0 28.109-12.585 28.109-28.11 0-15.524-12.585-28.109-28.109-28.109-15.525 0-28.11 12.585-28.11 28.109 0 15.525 12.585 28.11 28.11 28.11Z"
        />
        <Path
          fill="#F2F2F2"
          d="M250.72 257.271c19.663 0 35.602-19.952 35.602-44.563 0-24.612-15.939-44.564-35.602-44.564-19.662 0-35.602 19.952-35.602 44.564 0 24.611 15.94 44.563 35.602 44.563Z"
        />
        <Path
          fill="#CCC"
          d="M250.818 203.747h.098l1.76 100.938h-3.716l1.858-100.938Z"
        />
        <Path
          fill="#CCC"
          d="M256.89 270.571a.88.88 0 0 1-.368 1.189l-5.107 2.688-.82-1.557 5.106-2.689a.88.88 0 0 1 1.189.369Z"
        />
        <Path
          fill="#F2F2F2"
          d="M148.366 257.271c19.663 0 35.602-19.952 35.602-44.563 0-24.612-15.939-44.564-35.602-44.564-19.662 0-35.601 19.952-35.601 44.564 0 24.611 15.939 44.563 35.601 44.563Z"
        />
        <Path
          fill="#CCC"
          d="M154.537 272.24a.881.881 0 0 0-1.19-.369l-3.564 1.877-1.221-70.002h-.098l-1.858 100.939h3.716l-.505-28.966 4.351-2.29a.881.881 0 0 0 .369-1.189Z"
        />
        <Path
          fill="#6C63FF"
          d="M199.419 110.009c24.915 0 45.165 46.945 45.165 78.131 0 31.185-20.197 56.467-45.111 56.467-24.915 0-45.112-25.282-45.112-56.467 0-31.186 20.144-78.131 45.058-78.131Z"
        />
        <Path
          fill="#3F3D56"
          d="M207.291 263.119a1.118 1.118 0 0 0-1.507-.467l-4.517 2.378-1.546-88.699h-.124l-2.355 127.9h4.709l-.64-36.703 5.513-2.902a1.118 1.118 0 0 0 .467-1.507Z"
        />
        <Path
          fill="#fff"
          d="M298.071 315.092H36.893a15.005 15.005 0 0 1-14.985-14.985V160.7a15.001 15.001 0 0 1 14.985-14.985h261.178a14.998 14.998 0 0 1 14.985 14.985v139.407a15.005 15.005 0 0 1-14.985 14.985Z"
        />
        <Path
          fill="#D56C48"
          d="M227.112 303.285H58.451c-.212.001-.423-.004-.63-.016l79.768-44.925c1.519-.873 4.927-1.18 7.612-.686a6.882 6.882 0 0 1 2.11.686l53.535 30.148 2.565 1.443 23.701 13.35Z"
        />
        <Path
          fill="#D56C48"
          d="M280.322 303.285H134.444l28.269-13.35 2.034-.962 36.836-17.398c2.415-1.141 8.225-1.212 11.064-.215.191.068.367.139.53.215l67.145 31.71Z"
        />
        <Path
          fill="#3F3D56"
          d="M298.071 315.092H36.893a15.005 15.005 0 0 1-14.985-14.985V160.7a15.001 15.001 0 0 1 14.985-14.985h261.178a14.998 14.998 0 0 1 14.985 14.985v139.407a15.005 15.005 0 0 1-14.985 14.985ZM36.893 146.623A14.093 14.093 0 0 0 22.816 160.7v139.407a14.093 14.093 0 0 0 14.077 14.077h261.178a14.096 14.096 0 0 0 14.076-14.077V160.7a14.091 14.091 0 0 0-14.076-14.077H36.893Z"
        />
        <Path
          fill="#CCC"
          d="M298.071 304.194H36.893a4.096 4.096 0 0 1-4.087-4.087V160.7a4.092 4.092 0 0 1 4.087-4.087h261.178a4.09 4.09 0 0 1 4.087 4.087v139.407a4.096 4.096 0 0 1-4.087 4.087ZM36.893 157.521a3.182 3.182 0 0 0-3.179 3.179v139.407a3.183 3.183 0 0 0 3.179 3.178h261.178a3.18 3.18 0 0 0 3.178-3.178V160.7a3.183 3.183 0 0 0-3.178-3.179H36.893Z"
        />
        <Path
          fill="#FC0"
          d="M239.877 182.13c15.524 0 28.109-12.585 28.109-28.11 0-15.524-12.585-28.11-28.109-28.11-15.524 0-28.109 12.586-28.109 28.11 0 15.525 12.585 28.11 28.109 28.11Z"
        />
        <Path
          fill="#CCFFE4"
          d="M251.628 256.363c19.663 0 35.602-19.952 35.602-44.564 0-24.611-15.939-44.563-35.602-44.563-19.662 0-35.601 19.952-35.601 44.563 0 24.612 15.939 44.564 35.601 44.564Z"
        />
        <Path
          fill="#CCC"
          d="M251.726 202.838h.098l1.761 100.939h-3.717l1.858-100.939Z"
        />
        <Path
          fill="#CCC"
          d="M257.799 269.663a.88.88 0 0 1-.369 1.189l-5.106 2.688-.821-1.558 5.107-2.688a.878.878 0 0 1 1.189.369Z"
        />
        <Path
          fill="#CCFFE4"
          d="M149.274 256.363c19.663 0 35.602-19.952 35.602-44.564 0-24.611-15.939-44.563-35.602-44.563-19.662 0-35.601 19.952-35.601 44.563 0 24.612 15.939 44.564 35.601 44.564Z"
        />
        <Path
          fill="#CCC"
          d="M155.445 271.332a.88.88 0 0 0-1.189-.369l-3.565 1.876-1.221-70.001h-.098l-1.858 100.939h3.717l-.506-28.966 4.351-2.29a.883.883 0 0 0 .369-1.189Z"
        />
        <Path
          fill="#3DD384"
          d="M200.328 109.1c24.914 0 45.164 46.946 45.164 78.131 0 31.186-20.197 56.467-45.111 56.467-24.914 0-45.111-25.281-45.111-56.467 0-31.185 20.143-78.131 45.058-78.131Z"
        />
        <Path
          fill="#3F3D56"
          d="M208.199 262.211a1.106 1.106 0 0 0-.656-.546 1.132 1.132 0 0 0-.85.079l-4.517 2.378-1.547-88.699h-.124l-2.355 127.9h4.71l-.641-36.703 5.513-2.902a1.106 1.106 0 0 0 .545-.657 1.113 1.113 0 0 0-.078-.85Z"
        />
        <Path
          fill="#F90"
          d="M156.017 112.62c2.518 0 4.56-2.054 4.56-4.588 0-2.533-2.042-4.587-4.56-4.587-2.519 0-4.56 2.054-4.56 4.587 0 2.534 2.041 4.588 4.56 4.588Z"
        />
        <Path
          fill="#FF5C00"
          d="M30.042 132.692c2.519 0 4.56-2.054 4.56-4.588 0-2.534-2.041-4.588-4.56-4.588-2.518 0-4.56 2.054-4.56 4.588 0 2.534 2.042 4.588 4.56 4.588Z"
        />
        <Path
          fill="#A170DF"
          d="M341.095 104.242c2.518 0 4.56-2.054 4.56-4.588 0-2.533-2.042-4.587-4.56-4.587-2.519 0-4.561 2.054-4.561 4.587 0 2.534 2.042 4.588 4.561 4.588Z"
        />
        <G
          stroke="#1E1E1E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          clipPath="url(#b)"
        >
          <Path d="M51 168h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM51 180h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM63 168h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM56 180v4M56 188h4v-8M60 182h4M64 186v2" />
        </G>
      </G>
      <Path
        fill="#3DD384"
        d="m49.365 35.79-2.285 2.874L39 33.873 41.284 31l8.081 4.79ZM57.797 48.134l2.018 3.019-8.49 4.231-2.017-3.017 8.489-4.233ZM66.584 35.013l4.032.143-.4 8.456-4.034-.142.402-8.457ZM365.192 313.365l-2.873-2.285 4.791-8.08 2.873 2.285-4.791 8.08ZM352.849 321.797l-3.019 2.018-4.232-8.489 3.019-2.018 4.232 8.489Z"
      />
      <Path
        fill="#14B661"
        d="M42.76 336.246a4.618 4.618 0 0 0 4.612-4.623A4.618 4.618 0 0 0 42.76 327a4.618 4.618 0 0 0-4.612 4.623 4.618 4.618 0 0 0 4.612 4.623Z"
      />
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M21 56h347v260H21z" />
        </ClipPath>
        <ClipPath id="b">
          <Path fill="#fff" d="M38 162h32v32H38z" />
        </ClipPath>
      </Defs>
    </Svg>
  </SafeAreaView>
);
export default OnBoardingSvg;