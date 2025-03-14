import "../../../styles/common.css";

const Email = () => {
    return (  
        <section className="width-screen">
            <article className="width-max-login py-20 flex flex-col gap-10">
                <h2 className="text-center font-black text-xl">이메일 로그인</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <h5>이메일</h5>
                        <input className="w-full border border-gray-300 rounded-xl p-2" type="text" name="" id="" />
                    </div>
                    <div>
                        <h5>이름</h5>
                        <input className="w-full border border-gray-300 rounded-xl p-2" type="text" name="" id="" />
                    </div>
                    <div>
                        <h5>비밀번호</h5>
                        <input className="w-full border border-gray-300 rounded-xl p-2" type="text" name="" id="" />
                        <h6 className="text-xs text-gray-400">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</h6>
                    </div>
                    <div>
                        <h5>비밀번호 확인</h5>
                        <input className="w-full border border-gray-300 rounded-xl p-2" type="text" name="" id="" />
                    </div>
                </div>
            </article>
        </section>
    );
}
 
export default Email;