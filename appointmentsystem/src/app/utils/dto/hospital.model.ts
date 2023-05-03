import { User } from "./user.model";

export interface Hospital{
  user:User,
  hospitalId:string,
  hospitalName:string,
  hospitalAddress:string,
  doctors?:{
    doctorId:string,
    doctorFirstName?:string,
    doctorLastName?:string
  }[]
}

// XSRF-TOKEN=cece6bac-11cb-41e1-be9c-86fab307b9b4; JSESSIONID=E6BB1BB761C5524520A564A224889492; logged_out_marketing_header_id=eyJfcmFpbHMiOnsibWVzc2FnZSI6IklqVXlPV1F5T0dNNUxXRmxZelV0TkRFMVlpMWhaalE1TFRjd1ptVmpZemMzWm1ZM01pST0iLCJleHAiOm51bGwsInB1ciI6ImNvb2tpZS5sb2dnZWRfb3V0X21hcmtldGluZ19oZWFkZXJfaWQifX0%3D--350e48a2bb02ba41f000242488acd3e0861eded8; io=S2QCmII3rpRUbophAAGm





// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-GB,en;q=0.8
// Cache-Control: max-age=0
// Connection: keep-alive
// Cookie: XSRF-TOKEN=cece6bac-11cb-41e1-be9c-86fab307b9b4; JSESSIONID=E6BB1BB761C5524520A564A224889492
// Host: intranet.argusoft.com
// sec-ch-ua: "Not_A Brand";v="99", "Brave";v="109", "Chromium";v="109"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Linux"
// Sec-Fetch-Dest: document
// Sec-Fetch-Mode: navigate
// Sec-Fetch-Site: none
// Sec-Fetch-User: ?1
// Sec-GPC: 1
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36
