import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const PrivacyScreen = () => {
    return (
    <Fragment>
        <Helmet>
            <title>Menüzz adatvédelmi nyilatkozat</title>
            <meta name="description" content="Adatvédelmi nyilatkozat"/>
            <link rel="canonical" href={process.env.REACT_APP_FRONTEND_URL} />
        </Helmet>
        <section className="section pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="p-5 osahan-invoice bg-white shadow-sm">
                            <h3>Adatvédelmi nyilatkozat</h3>

                            <h5>1. BEVEZETŐ</h5>
                            <p>A www.menuzz.hu - a továbbiakban: Weblap - üzemeltetője Kulcsár Máté (a továbbiakban: Adatkezelő), mint Adatkezelő jelen Adatvédelmi Nyilatkozat és Adatkezelési Tájékoztató ( a továbbiakban: Adatvédelmi Nyilatkozat) közzétételével ismerteti az adatkezelésére vonatkozó elveit, melyeket az Adatkezelő magára nézve kötelező érvényűnek ismer el. Az Adatkezelő minden tőle ésszerűen elvárható intézkedést megtesz az általa kezelt személyes adatok biztonsága érdekében.</p>
                            <p>Kérjük, hogy Weboldalunk használata előtt szíveskedjen elolvasni a jelen Adatvédelmi Nyilatkozatot, mely közérthető módon tartalmazza, miként kezeljük személyes adatait! Az Adatvédelmi Nyilatkozatban az Adatkezelő egyértelműen és részletesen tájékoztatja az érintetteket az adatok kezelésével kapcsolatos minden fontos tényről.</p>

                            <h5>2. WEBOLDALON TALÁLHATÓ KAPCSOLATI ŰRLAP KITÖLTÉSE</h5>
                            <p>Az Adatkezelő a weboldalon keresztül beérkező kapcsolati űrlap által hozzáfért adatokat kizárólag kapcsolattartás és információ nyújtás céljából használja fel, az adatokat adatbázisban nem tárolja.</p>

                            <h5>3. ADATTOVÁBBÍTÁS, ADATOK ÖSSZEKAPCSOLÁSA</h5>
                            <p>Az Adatkezelő nem ad el, nem ad bérbe és semmilyen formában nem bocsájt rendelkezésére a Felhasználóra vonatkozó személyes adatokat illetve információkat más cégnek, magánszemélynek.</p>
                            <p>Az Adatkezelő a tőle elvárható módon gondoskodik az adatok megfelelő biztonságáról, és megteszi azokat a technikai és szervezési intézkedéseket, melyek az adatvédelmi szabályok és elvek érvényre juttatását garantálják és a személyes adatok biztonságát elősegítik.</p>
                            <p>Tájékoztatjuk a Tisztelt Felhasználókat arról, hogy az Adatkezelő személyes adatot kizárólag az érintett hozzájárulásával továbbít harmadik személynek vagy személyeknek.</p>

                            <h5>4. SÜTIK (COOKIE-K)</h5>
                            <p>A sütiket a meglátogatott weboldalak helyezik el a felhasználó számítógépén és olyan információt tartalmaznak, mint például az oldal beállításai vagy a bejelentkezés állapota.</p>

                            <p>A cookie-k tehát a felkeresett weboldalak által létrehozott kis fájlok. A böngészési adatok mentésével javítják a felhasználói élményt. A cookie-k segítségével a weboldal emlékezik a webhely beállításaira, és helyileg releváns tartalmakat kínál fel.</p>

                            <p>A weblap látogatóinak számítógépére a szolgáltató weboldala egy kis fájlt (cookie) küld annak érdekében, hogy a látogatás ténye és ideje megállapítható legyen. Erről a szolgáltató a weblap látogatóját tájékoztatja. </p>
                            <p>
                            Az adatkezelésben érintettek köre: a weboldal látogatói.<br/>
                            Az adatkezelés célja: többletszolgáltatás, azonosítás, a látogatók nyomon követése.<br/>
                            Az adatkezelés jogalapja: A felhasználó hozzájárulása nem szükséges, amennyiben a sütik használatához a szolgáltatónak feltétlenül szüksége van.<br/>
                            Az adatok köre: egyedi azonosítószám, időpont, beállítási adatok.<br/>
                            A felhasználónak lehetősége van arra, hogy a sütiket a Beállítások menüpontban bármikor törölje a böngészőkből.<br/>
                            Az adatok megismerésére jogosult adatkezelők: A sütik használatával nem kezel személyes adatokat az adatkezelő.<br/>
                            Az adatok tárolási módja: elektronikus.
                            </p>

                            <h5>5. GOOGLE ANALYTICS</h5>
                            <p>Weboldalunk a Google Analytics alkalmazást használja.</p>

                            <p>Google Analytics alkalmazása esetén:</p>

                            ​<p>A Google Analytics belső cookie-k (sütik) alapján állít össze jelentést ügyfelei részére a weblap felhasználóinak szokásairól.</p>

                            <p>A weboldal üzemeltetőjének megbízásából a Google az információkat arra használja, hogy kiértékelje, hogyan használják a felhasználók a honlapot. További szolgáltatásként a honlap aktivitásával összefüggő jelentéseket készít weboldal üzemeltetőjének részére, hogy az további szolgáltatásokat teljesíthessen.</p>

                            <p>Az adatokat a Google szerverei kódolt formátumban tárolják, hogy megnehezítsék és elejét vegyék az adatokkal való visszaélésnek.</p>

                            <p>A Google Analytics letiltása az alábbiak szerint történhet. Idézet az oldalról:</p>

                            <p>Azok a webhelyfelhasználók, akik nem szeretnék, hogy a Google Analytics JavaScript jelentést készítsen az adataikról, telepíthetik a Google Analytics letiltó böngészőbővítményét. A bővítmény megtiltja a Google Analytics JavaScript (ga.js, analytics.js, és dc.js) számára, hogy információkat küldjön a Google Analytics rendszernek. A böngészőbővítmény a legtöbb újabb böngészőben használható. A Google Analytics letiltó böngészőbővítménye nem akadályozza meg az adatküldést maga a webhely és más internetes elemzési szolgáltatások részére.</p>

                            <p>https://support.google.com/analytics/answer/6004245?hl=hu</p>

                            <p>A Google adatvédelmi irányelvei: https://policies.google.com/privacy?hl=hu​</p>

                            <p>Az adatok felhasználásával és védelmével kapcsolatos információk részletesen a fenti hivatkozásokon érhetők el.</p>




                        </div> {/* p-5 osahan-invoice bg-white shadow-sm */}
                    </div> {/* col-md-8 mx-auto */}
                </div> {/* row */}
            </div> {/* container */}
        </section>
    </Fragment>
  );
};

export default PrivacyScreen;
