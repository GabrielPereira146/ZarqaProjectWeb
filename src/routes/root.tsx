import { Outlet, useParams } from 'react-router-dom'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { useSearchParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Root() {
  const { i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const langQuery = searchParams.get("lang");
  console.log("AAAAAA", langQuery)

  useEffect(() => {
    if (langQuery === "ptBR") {
      i18n.changeLanguage("ptBR");
    } else {
      i18n.changeLanguage("enUS");
    }
  }, [])

  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}


