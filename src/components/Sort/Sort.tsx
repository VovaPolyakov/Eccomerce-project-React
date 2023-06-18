import styles from '../../styles/Sorting.module.scss'
import arrowyellow from '../../assets/images/arrowyellow.png'
import arrowgreen from '../../assets/images/arrowgreen.png'
import arrowblue from '../../assets/images/arrowblue.png'
import arrowred from '../../assets/images/arrowred.png'

const Sort = () => {
    return (
        <div className={styles.sorting_body}>
            <h2 className={styles.name}>Пластик</h2>
            <div className={styles.plastic}>
                <div className={styles.plastic_about}>
                Это <span>самая</span> объемная и пугающая новичков категория. Виды пластика звучат как таблица Менделеева, нюансы сбора пугают, польза кажется сомнительной...  
                <span>Рассказываем</span> максимально доступно.
                </div>
                <div className={styles.yellow_block}>
                    цвет бака
                </div>
                <img className={styles.yellowarrow} src={arrowyellow} alt="" />
            </div>
            <h3 className={styles.h3}>Как называется?</h3>
            <p className={styles.paragraph}><span>ПЭТ (01):</span> бутылки для напитков и продуктов, емкости для бытовой химии. </p>
            <p className={styles.paragraph}><span>ПНД (02):</span> бутылки, канистры, лейки, горшки для цветов, большинство фасовочных пакетиков и пакетов-«маек».</p>
            <h3 className={styles.h3_mini}>Особенности приема</h3>
            <p className={styles.paragraph}>Пищевые <span>ПЭТ</span>- и 
            <span>ПНД</span>-упаковки можно сдать практически <span>везде</span> – и в городские контейнеры для вторсырья, и в пункты приема.</p>
            <h3 className={styles.h3}>Пластик, который принимают редко</h3>
            <p className={styles.paragraph}><span>ПВХ (03):</span> трубы, пленка для натяжных потолков, электроизоляция проводов и кабелей, искусственная кожа, линолеум.</p>
            <p className={styles.paragraph}><span>ПВД (04):</span>  различные <span>виды</span> пленки (стрейч, пупырчатая, парниковая) и мягкие «маслянистые» (не шуршащие) пакеты.</p>
            <p className={styles.paragraph}><span>ПП (05):</span> одноразовые стаканчики, мешки, упаковочная пленка (та, что хрустит и рвется, а не тянется), обертки для шоколадок и батончиков, трубы, тара.</p>
            <p className={styles.paragraph}><span>ПС (06):</span> «мягкие» одноразовые стаканчики, упаковка для овощей и фруктов, упаковочный пенопласт.</p>
            <p className={styles.paragraph}><span>Другие пластики (07):</span> весь <span>остальной пластиковый мусор</span> из категории ТБО (твердых бытовых отходов), который возникает в процессе жизнедеятельности человека.</p>
            <h3 className={styles.h3}>Особенности приема</h3>
            <p className={styles.paragraph}>Обычным жителям <span>нужно</span>  либо искать волонтерские организации, которые принимают на сортировку мусора пластик с маркировкой 04, 05 и 06 (<span>03 и 07</span> не принимают практически нигде), либо выбрасывать его в несортируемый мусор.</p>
            <h2 className={styles.name_mac}>Макулатура</h2>
            <div className={styles.plastic}>
                <div className={styles.plastic_about}>
                Это <span>все</span> виды бумаги и картона, пригодные для переработки и дальнейшего использования.
                </div>
                <div className={styles.green_block}>
                    цвет бака
                </div>
                <img className={styles.greenarrow} src={arrowgreen} alt="" />
            </div>
            <h3 className={styles.h3}>Как подготовить такой мусор?</h3>
            <p className={styles.paragraph}><span>Сложить</span> максимально компактно, тетрапаки <span>ополоснуть</span>, крышечки <span>снять.</span></p>
            <h2 className={styles.name_mac}>Стекло</h2>
            <div className={styles.plastic}>
                <div className={styles.plastic_about}>
                Это один из <span>самых</span> экологичных материалов для упаковки – стекло может быть переработано <span>полностью.</span> 
                </div>
                <div className={styles.blue_block}>
                    цвет бака
                </div>
                <img className={styles.bluearrow} src={arrowblue} alt="" />
            </div>
            <h3 className={styles.h3}>Как подготовить такой мусор?</h3>
            <p className={styles.paragraph_mini}>Перед сдачей стеклотару достаточно <span>ополоснуть и снять</span> крышки. Этикетки удалять не обязательно.</p>
            <h2 className={styles.name_mac}>Металл</h2>
            <div className={styles.plastic}>
                <div className={styles.plastic_about}>
                В основном, на переработку принимаются жестяные изделия: чистые консервные банки и металлические крышки. Если вы можете их разрезать или сжать без риска для себя – сделайте это на стадии сортировки мусора дома.
                </div>
                <div className={styles.red_block}>
                    цвет бака
                </div>
                <img className={styles.redarrow} src={arrowred} alt="" />
            </div>
            <h3 className={styles.h3}>Особенности приема</h3>
            <p className={styles.paragraph}>К переработке практически <span>везде</span> принимаются алюминиевые банки, которые достаточно ополоснуть и сжать. Остальные виды алюминиевых отходов: фольга, тюбики, одноразовые контейнеры и формы принимаются <span> редко.</span></p>
            <p className={styles.footer_p}>Пищевые отходы нужно либо 
            <span>компостировать</span> (эта роскошь доступна жителям загородных домов), либо <span>измельчать</span> с помощью специальных устройств-диспоузеров (устанавливаются под раковину и соединяются с общедомовой канализацией).</p>
        </div>
    )
}

export default Sort