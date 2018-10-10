import express from "express";
import db from "../api/config";
import nodemailer from "nodemailer";
/*
  get / : artilce list
  get /id : article
*/
const router = express.Router();

router.post("/", (req, res) => {
  const {
    name,
    phone,
    company,
    status,
    email,
    country,
    department,
    reason,
    hasVision,
    industry,
    productType,
    faultType,
    numOfLine,
    path,
    content,
    adAgree,
  } = req.body;

  const sql = `
  INSERT INTO inquiry (name, phone, company, department, status, email, country, reason,
    has_vision, industry, product_type, fault_type, num_of_line,
    path, content, ad_agree)
    VALUES ('${name}', '${phone}', '${company}', '${department}', '${status}', '${email}', '${country}',
    '${reason}', ${hasVision}, '${industry}', '${productType}', '${faultType}', '${numOfLine}', ${path}, '${content}',
    ${adAgree === "true" ? 1 : 0})
  `;
  
  db.getConnection((err, conn) => {
    conn.query(sql, (err) => {
      conn.release();
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        res.status(204).json({});;
      }
    });
  })

  // send email
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.office365.com",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: "sales@sualab.com",
  //     pass: "su@l@b.c0m"
  //   },
  //   tls: {
  //     ciphers: "SSLv3"
  //   },
  //   requireTLS: true
  // });
  const transporter = nodemailer.createTransport({
    sendmail:true
  });

  let pathString = "";
  if (path == 0) pathStrng = "전시회/세미나";
  else if (path == 1) pathString = "주변인 소개";
  else if (path == 2) pathString = "매체(기사/방송)";
  else if (path == 3) pathString = "검색(포탈/홈페이지)";
  else if (path == 4) pathString = "기타";

  transporter.sendMail(
    {
      from: `${name} <${email}>`,
      to: process.env.GET_INQUIRY_EMAIL,
      subject: `[문의] ${name}님의 문의 (${company}, ${country})`,
      text: "text",
      html: `<h3>이름</h3>
      <p>${name}</p>
      <h3>전화번호</h3>
      <p>${phone}</p>
      <h3>회사</h3>
      <p>${company}</p>
      <h3>부서</h3>
      <p>${department}</p>
      <h3>직급</h3>
      <p>${status}</p>
      <h3>이메일</h3>
      <p>${email}</p>
      <h3>국가</h3>
      <p>${country}</p><hr/>
      <h3>문의이유</h3>
      <p>${reason}</p><hr/>
      <h4>Vision 장비 보유 유무</h4>
      <p>${hasVision == 1 ? "유" : hasVision == 0 ? "무" : hasVision == 2 ? "모름" : ""}</p>
      <h4>산업</h4>
      <p>${industry}</p>
      <h4>제품 유형</h4>
      <p>${productType}</p>
      <h4>불량 유형</h4>
      <p>${faultType}</p>
      <h4>생산라인 수</h4>
      <p>${numOfLine}</p><hr/>
      <h3>알게 된 경로</h3>
      <p>${pathString}</p>
      <h3>문의 내용</h3>
      <p style="white-space: pre-wrap;">${content}</p>
      <h3>광고정보 수신 동의 여부</h3>
      <p>${adAgree}</p>`,
    },
    (err, info) => {
      console.log(err, info);
    },
  );
});

export default router;
