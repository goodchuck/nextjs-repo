"use client";

import style from './login.module.css';
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import LogoutButton from './LogoutButton';
import { LoadingButton } from '@/app/_component/LoadingButton';

export default function LoginModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage('');
    // console.log("on submit 시도?", e, id, password)
    try {
      const response = await signIn("credentials", {
        username: id,
        password,
        redirect: false,
      })
      // console.log({ response });
      if (!response?.ok) {
        setMessage('아이디와 비밀번호가 일치하지 않습니다.');
      } else {
        // router.replace('/home');
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      setMessage('아이디와 비밀번호가 일치하지 않습니다.');
    }
  };
  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={style.modalBody}>
          <div className={style.inputDiv}>
            <label className={style.inputLabel} htmlFor="id">아이디</label>
            <input id="id" className={style.input} value={id} onChange={onChangeId} type="text" placeholder="" />
          </div>
          <div className={style.inputDiv}>
            <label className={style.inputLabel} htmlFor="password">비밀번호</label>
            <input id="password" className={style.input} value={password} onChange={onChangePassword} type="password" placeholder="" />
          </div>
        </div>
        <div className={style.message}>{message}</div>
        <div className={style.modalFooter}>
          {/* <button className={style.actionButton} disabled={!id && !password}>로그인하기</button> */}
          <LoadingButton disabled={!id && !password} htmlType={'submit'}></LoadingButton>
        </div>
      </form >
    </>

    //   </div>
    // </div>
  );
}