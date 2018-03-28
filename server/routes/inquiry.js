import express from "express";
import sqlite3 from "sqlite3";
import nodemailer from "nodemailer";
/*
  get / : artilce list
  get /id : article
*/
const router = express.Router();

router.post("/", (req, res) => {
  const db = new sqlite3.Database("./sualabdb.sqlite3");

  const {
    name,
    phone,
    company,
    status,
    email,
    country,
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
  let stmt = db
    .prepare(
      "INSERT INTO inquiry (name, phone, company, status, email, country, reason, \
              has_vision, industry, product_type, fault_type, num_of_line, \
              path, content, ad_agree) \
              VALUES (?, ?, ?, ?, ?, ?, ?, \
                      ?, ?, ?, ?, ?, \
                      ?, ?, ?)",
      [
        name,
        phone,
        company,
        status,
        email,
        country,
        reason,
        hasVision,
        industry,
        productType,
        faultType,
        numOfLine,
        path,
        content,
        adAgree,
      ],
    )
    .run(err => {
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        res.status(204).json(stmt.lastID);
      }
    });
  stmt.finalize();

  db.close();

  // send email
  const transporter = nodemailer.createTransport({
    sendmail: true,
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
      console.log(info);
    },
  );
});

export default router;
