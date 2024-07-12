export default function Page() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 ">
          어떤 제품을 만들고 싶으세요?
        </h2>
        <div className="mt-10 flex  gap-x-6 justify-stretch items-stretch">
          <textarea
            name="text"
            id="text"
            className="text-xl font-normal block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            placeholder="세1금 환급 알림 서비스를 만들고 싶어"
          />
          <a
            href="#"
            className="text-xl flex items-center text-center align-middle rounded-md bg-indigo-600 px-4 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 whitespace-nowrap"
          >
            시작하기
          </a>
        </div>
      </div>
    </div>
  );
}
