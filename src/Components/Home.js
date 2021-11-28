import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";

const Home = () => {
  const [selected, setSelected] = useState("TR");
  const phonedata = {
    TR: "+90",
    US: "+1",
    GB: "+44",
    FR: "+33",
    BD: "+880",
    BE: "+32",
    BF: "+226",
    BG: "+359",
    BA: "+387",
    BB: "+1-246",
    WF: "+681",
    BL: "+590",
    BM: "+1-441",
    BN: "+673",
    BO: "+591",
    BH: "+973",
    BI: "+257",
    BJ: "+229",
    BT: "+975",
    JM: "+1-876",
    BV: "+55",
    BW: "+267",
    WS: "+685",
    BQ: "+599",
    BR: "+55",
    BS: "+1-242",
    JE: "+44-1534",
    BY: "+375",
    BZ: "+501",
    RU: "+7",
    RW: "+250",
    RS: "+381",
    TL: "+670",
    RE: "+262",
    TM: "+993",
    TJ: "+992",
    RO: "+40",
    TK: "+690",
    GW: "+245",
    GU: "+1-671",
    GT: "+502",
    GS: "+500",
    GR: "+30",
    GQ: "+240",
    GP: "+590",
    JP: "+81",
    GY: "+592",
    GG: "+44-1481",
    GF: "+594",
    GE: "+995",
    GD: "+1-473",
    GA: "+241",
    SV: "+503",
    GN: "+224",
    GM: "+220",
    GL: "+299",
    GI: "+350",
    GH: "+233",
    OM: "+968",
    TN: "+216",
    JO: "+962",
    HR: "+385",
    HT: "+509",
    HU: "+36",
    HK: "+852",
    HN: "+504",
    HM: "+61",
    VE: "+58",
    PR: "+1-787",
    PS: "+970",
    PW: "+680",
    PT: "+351",
    SJ: "+47",
    PY: "+595",
    IQ: "+964",
    PA: "+507",
    PF: "+689",
    PG: "+675",
    PE: "+51",
    PK: "+92",
    PH: "+63",
    PN: "+870",
    PL: "+48",
    PM: "+508",
    ZM: "+260",
    EH: "+212",
    EE: "372",
    EG: "+20",
    ZA: "+27",
    EC: "+593",
    IT: "+39",
    VN: "+84",
    SB: "+677",
    ET: "+251",
    SO: "+252",
    ZW: "+263",
    SA: "+966",
    ES: "+34",
    ER: "+291",
    ME: "+382",
    MD: "+373",
    MG: "+261",
    MF: "+590",
    MA: "+212",
    MC: "+377",
    UZ: "+998",
    MM: "+95",
    ML: "+223",
    MO: "+853",
    MN: "+976",
    MH: "+692",
    MK: "+389",
    MU: "+230",
    MT: "+356",
    MW: "+265",
    MV: "+960",
    MQ: "+596",
    MP: "+1-670",
    MS: "+1-664",
    MR: "+222",
    IM: "+44",
    UG: "+256",
    TZ: "+255",
    MY: "+60",
    MX: "+52",
    IL: "+972",
    IO: "+246",
    SH: "+290",
    FI: "+358",
    FJ: "+679",
    FK: "+500",
    FM: "+691",
    FO: "+298",
    NI: "+505",
    NL: "+31",
    NO: "+47",
    NA: "+264",
    VU: "+678",
    NC: "+687",
    NE: "+227",
    NF: "+672",
    NG: "+234",
    NZ: "+64",
    NP: "+977",
    NR: "+674",
    NU: "+683",
    CK: "+682",
    XK: "+383",
    CI: "+225",
    CH: "+41",
    CO: "+57",
    CN: "+86",
    CM: "+237",
    CL: "+56",
    CC: "+61",
    CA: "+1",
    CG: "+242",
    CF: "+236",
    CD: "+243",
    CZ: "+420",
    CY: "+357",
    CX: "+61",
    CR: "+506",
    CW: "+599",
    CV: +"+238",
    CU: "+53",
    SZ: "+268",
    SY: "+963",
    SX: "+599",
    KG: "+996",
    KE: "+254",
    SS: "+211",
    SR: "+597",
    KI: "+686",
    KH: "+855",
    KN: "+1869",
    KM: "+269",
    ST: "+239",
    SK: "+421",
    KR: "+82",
    SI: "+386",
    KP: "+850",
    KW: "+965",
    SN: "+221",
    SM: "+378",
    SL: "+232",
    SC: "+248",
    KZ: "+7",
    KY: "+1-345",
    SG: "+65",
    SE: "+46",
    SD: "+249",
    DO: "+1-809",
    DM: "+1-767",
    DJ: "+253",
    DK: "+45",
    VG: "+1-284",
    DE: "+49",
    YE: "+967",
    DZ: "+213",
    UY: "+598",
    YT: "+262",
    UM: "+1",
    LB: "+961",
    LC: "+1-758",
    LA: "+856",
    TV: "+688",
    TW: "+886",
    TT: "+1-868",
    LK: "+94",
    LI: "+423",
    LV: "+371",
    TO: "+676",
    LT: "+370",
    LU: "+352",
    LR: "+231",
    LS: "+266",
    TH: "+66",
    TF: "+263",
    TG: "+228",
    TD: "+235",
    TC: "+1-649",
    LY: "+218",
    VA: "+379",
    VC: "+1-784",
    AE: "+971",
    AD: "+376",
    AG: "+1-268",
    AF: "+93",
    AI: "+1-264",
    VI: "+1-340",
    IS: "+354",
    IR: "+98",
    AM: "+374",
    AL: "+355",
    AO: "+244",
    AQ: "+672",
    AS: "+1-684",
    AR: "+54",
    AU: "+61",
    AT: "+43",
    AW: "+297",
    IN: "+91",
    AX: "+358-18",
    AZ: "+994",
    IE: "+353",
    ID: "+62",
    UA: "+380",
    QA: "+974",
    MZ: "+258",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="hidden md:block before:bg-gradient-to-r before:from-primary-home-purple before:to-transparent before:absolute before:inset-0 before:h-full before:w-full before:z-20  ">
        <Slider {...settings}>
          <div>
            <img
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
              alt="main1"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <img
              src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
              alt="main1"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <img
              src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
              alt="main1"
              className=" w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <img
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
              alt="main1"
              className=" w-full h-[500px] object-cover"
            />
          </div>
        </Slider>
      </div>
      <div className="md:hidden">
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_en_1629378034568.jpeg"
              alt="main1"
              className="w-full h-[230px] object-cover"
            />
          </div>
          <div>
            <img
              src="https://cdn.getir.com/misc/6069cee3f7be2b6472dc8b5f_banner_en_1629921894520.jpeg"
              alt="main1"
              className="w-full h-[230px] object-cover"
            />
          </div>
        </Slider>
      </div>
      <div className="md:hidden bg-white rounded-lg flex flex-col gap-y-2 p-6	">
        <h4 className="text-primary-home-purple font-semibold text-center">
          Login or register
        </h4>
        <div>
          <div className="flex flex-row justify-center items-center gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phonedata)}
              customLabels={phonedata}
              placeholder="Select Language"
              selected={selected}
              onSelect={(code) => setSelected(code)}
              className="flag-select"
            />
            <label className="flex-1 relative pb-1 block">
              <input
                required
                type="text"
                className="h-14 w-full p-2 rounded border-2  border-gray-300 transition-colors hover:border-purple-300 focus:border-purple-300 outline-none peer pt-2"
              />
              <span className="absolute top-0 left-0 text-sm text-gray-500 flex items-center h-full px-4 peer-valid:h-6 transition-all peer-valid:text-primary-home-purple peer-valid:text-[12px]">
                Mobile Phone
              </span>
            </label>
          </div>
        </div>
        <button className="bg-primary-yellow  font-semibold text-sm h-12 w-full rounded text-primary-home-purple hover:bg-primary-home-purple hover:text-primary-yellow transition-colors">
          Continue with phone number
        </button>
      </div>

      <div className="hidden absolute md:flex flex-row justify-between items-center max-w-7xl mx-auto w-full   top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  z-50 ">
        <div className="flex flex-col items-start justify-start gap-y-10">
          <img
            src="https://getir.com/_next/static/images/groceriesInMinutes-20f12c15098e8fd2bae874e2a40e343b.svg"
            alt="gtr"
            className="h-[180px]"
          />
          <h2 className="text-[36px] text-white font-semibold leading-10 text-left">
            At your door in
            <br /> minutes
          </h2>
        </div>
        <div className="w-[400px] bg-white rounded-lg flex flex-col gap-y-2 p-6	">
          <h4 className="text-primary-home-purple font-semibold text-center">
            Login or register
          </h4>
          <div>
            <div className="flex flex-row justify-center items-center gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phonedata)}
                customLabels={phonedata}
                placeholder="Select Language"
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="flex-1 relative pb-1 block">
                <input
                  required
                  type="text"
                  className="h-14 w-full p-2 rounded border-2  border-gray-300 transition-colors hover:border-purple-300 focus:border-purple-300 outline-none peer pt-2"
                />
                <span className="absolute top-0 left-0 text-sm text-gray-500 flex items-center h-full px-4 peer-valid:h-6 transition-all peer-valid:text-primary-home-purple peer-valid:text-[12px]">
                  Mobile Phone
                </span>
              </label>
            </div>
          </div>
          <button className="bg-primary-yellow  font-semibold text-sm h-12 w-full rounded text-primary-home-purple hover:bg-primary-home-purple hover:text-primary-yellow transition-colors">
            Continue with phone number
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
