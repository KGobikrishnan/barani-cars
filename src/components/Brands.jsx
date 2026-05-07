import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Brands.css';

const brands = [
  { name: 'Morel', logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0010/3043/brand.gif?itok=DH8ioLi3' },
  { name: 'Focal', logo: 'https://i.pinimg.com/736x/5a/b4/3c/5ab43c0fada6ada757d83e9e9e5c2a68.jpg' },
  { name: 'Recoil', logo: 'https://www.north49decals.com/cdn/shop/products/recoilAudiob.jpg?v=1681923988&width=1445' },
  { name: 'Massive', logo: 'https://images.seeklogo.com/logo-png/29/1/massive-audio-logo-png_seeklogo-298604.png' },
  { name: 'Need For Speed', logo: 'https://castleautoindia.com/wp-content/uploads/2023/07/nfs-logo-1x1-1.png' },
  { name: 'MOCO', logo: 'https://moco.co.in/cdn/shop/files/MOCO_LOGO_1_2.png?v=1755761786&width=110' },
  { name: 'ABBTRONS', logo: 'data:image/jpeg;base64,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' },
  { name: 'MARTS', logo: 'https://static.wixstatic.com/media/d2087d_c2310170abe94f33b8baf57dec9d5cb8~mv2.png' },
  { name: 'GPNE', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DUfUF29Q_SOnD0-LZm9c11Xdixor88myzg&s' },
  { name: 'MOTO RANGER', logo: 'https://www.motoranger.in/images/logo.png' },
  { name: 'AOZOOM', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tO4437d5sy25w_nHAYkm1dT9233H_N0wRg&s' },
  { name: 'MAXXLINK', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOM7yQu7RLXsP7S_x2OBRwOJsLBZzH4cibQ&s' },
  { name: 'GFX', logo: 'data:image/png;base64,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' },
  { name: 'HIGH ON DRIVE', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVYLavHrFW4Wna4TrzFG0_kn1QBXzWZ9hGQ&s' },
  { name: 'RS', logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAflBMVEUAAAD+/v7////29vYRERFoZ2UGBgZZWVn4+PgiIiLMzMzW1tYoKChQUFCBgYG1tbXs7Oze3t7k5OQsLCxDQ0PBwcHKysrY2NgbGxuenp47OzsUFBR0dHQTExO6urqXl5ePj49BQUFhYWE2NjZ5eXmZmZlUVFSnp6dLS0uJh4hlvNrDAAAH5UlEQVR4nO2bC3eiOhCAyaCIoBJQXmLBN/b//8GbFxCsSsTeu3vOne90W+oyyWQymSST1LIQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBPk/4IzkT+q8Sv3Ufxcu4wXT7Edph33sjeZkqrMTAoGREHru23sd8E/HlMS/0Ymp0hsuMgLgXwCBrvWSiurHFQckN9XZqkbVQZQUgFbTTLZkHEzrmanOjt9UP7IuuDVFHeyxCsuC7Lmp0lveoV1jDbzvvrKgaX4yzjFaSlOdrX2nMf/nDvLDZ2khSzoRGO0bQoGdsdI+yLqElaPTYoD1Yrvvqw2wlSWtPtSZrE11Xsv3ldzFSGbX0611am9EpNNjXmo8W626hrLqN2ZCad/SUiqj9md8m+qsYodSIjJsawC6zqpbnfmHGBt6rbsh1IZSSc/Spk39NXY9my3NhOZ2L+KYNvXX6NksMpz6LzI6wntN/TU07wBjk10bheU3/7/2jpVmZzCc+mc2tEsMHtyv4lNnKMA/x3wESuLOO8AodjinHLTOYahJfDY8lT4lzI3X0YyFq49DGgxS+r2FFTM0VduAXCxJx84s7u21ojq7vgLDkxYoMzcuDbaajiYRjJ3Exaimxgs83TsMyr5bwnKd3WYY3D5c4MHUVOesv/59bip48Bu3O22j3fkznQnsTZWe9ia2pwo/+R8gXrcsu43fr8gfxguP8r6mxzU/2ELxltgrLdp8UXjVVU/K7QaIsXtkP3dHDyoFuFNGDsqoWvQKW41w6naGYrKmQW/W945nIePeoymN/PpY3BXmBGMiXluq8bSqLzCJ/b16Ar0zYTB5uERxbs8KeEwJWs8aj8PM1rodnm8qZ/ex42pYwQB7TWfT3QdTRp9aXmwqq3v/MJ8IXlF0Qwrol6FQrSkN7gtFJn5Pa4D4V9Z1866n2yzEEIXuqxC/evXkarGJf61+Qecud/FGwJtBuypmT69TDjstPHHcw+c677rFmnlqqdaX/+5AyqHspRWBpHoAWSzf4sq/TUtoF11sajXUeRI1CvMfycDbWdTtsH7sC4M3Y3P7s5lsjQPesp03eCmDCalrp7Bs7FFr/ttzYX+9CGDqbTXocsMJqao3m7MFXjuL395aSbczrCYSGkYjRzePyd504ittG5k27lVvmLjTXGuC8Qpv05tZTEKYjHuarRsh/23v6Gve7tgGueg6u0ZLrN39Ok5Ovb195ijdjwMVN/S8g/hmQnU/w0vCQrblgwQvDwKVoc7WQS4LZZQ0jThOb+JnkiLulWbnBw8jH+kf2Qxw6QlvTcWOfr9iFikz2fJROjOoefbf2sw0lubrH+egC85ubAkz+4Sl6RhEEAT5f+FM/kYGpovK/fCc8l/AdQdyH9vp3wjOjgiCIDrO0Az0EE3oSQG9j9+ow+DV9SWk6V6lEYvY81TCaO/5vhfoh75Tz9urx8U+pWklT1vWFS9A5MLXHhPy5U3Idc4+vshXJmePRqUsa8be8eKdI59jXvGk5GKJmFIyVnJYD+ROFxRoCE1aeAfN5tYJwaVsu9kdA/HzY5W8ziJCUyCiCXNWQKpygFOAKKJia76mEIUqcezEAL4LttCqBsIKkle0apkl3QKhERWJqiIE6g9uzGuSFpkr67cmIVNUTvxzG6aTPSHdcdsUwkbpnESZE8nEQU7C4suWOYuK+BN1MTkgsZOpPNeUH9N/qxtOHuTOEgi3kpPKnMWO0LkS+4YwY/Z6fR7wReFsZYknT4mPUMfqmtqS17GCLiPohO4ZEvXIKnNKj1c8obDiXiWOxmPSJH4LyvTNAukSNXj8eFEkvQrKrL+V/blw5cWSHNq0tMfPqfLydarpAKTLrjo+2Zbqgso3pFaRarm9GQQ3VXhTGWernUcxTVdZJhyqsAlt3/H5Lb9atnjDjZFDwo1xbY1fZ1nmyEd3NzgOp8rTlF6elaiEWgw0jtyqM7QHh4NKqs7AXWgFtKNGZqtk10553kkWzTzt2LrCGUjsQynkVyDuSmU2F5NF39g4iofSzVrP8LtXS/ZPjEnW6y4htDu2ubIXN+pq4l67olhBl/87gx0EpZLZ+ARC0R7haU3vBOC64ObS76Xv3lg7glL16ZoNWjqQBvX4QN3e1lLYPe8iGQdOBGZZrV20iyHe5crFE+66SkgvIOiOxtiwmuTqTHLPxVTvsOG7z3bSJ1k4EpquumqYmLNyB4IH65kdP3vcSb1EYk0UdORu891Z9CCv+IjuLPjgZV2x5wVQJsuCx9kSwaDJe57S9GRlrjzaiLlBK9ngNYErH0jclic1HMo2WGReerWsaCAPuubGOMsDzxNxZ5tNKqPUhfd63J0ClVBvNit5VX/uMh2PBHjFC8KeWXTnlua+yyzFX2cB+8TdV7iuz5TKItmgqxaUpkSMJxmLhBgb1Ud+b+71dosZzfZA6lkKFX1RODNaznug8emtUPEKLq9lwuadRN37ZV1seypFfGU9EYZiPlwSiLzmiCAA8CikYlRW/CaaMm0th8OaOXEYeoUwAaEJDN4KvJVhFAvnyJKEx87c478VcXK15vITztnjTdl4saj5EIQ0UX9ssWHPsgBrmiRsOhb6O+ckigIVbRd1Sv1KxpiKrwRqUYd18YSxNh4Xk4oe4yiKh2OeNeova3ShJwUYvPJr6iAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiDIn+IfYteGs8IwSXkAAAAASUVORK5CYII=' },
  { name: 'SUNKOOL', logo: 'https://static.wixstatic.com/media/b3772b_0d8c254592aa41c791fcb37603dbe664~mv2.png/v1/fit/w_2500,h_1330,al_c/b3772b_0d8c254592aa41c791fcb37603dbe664~mv2.png' },
  { name: 'AUDIBLEX', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHh-xspxnjS0i8fCdEbhbvni3VdoJ76BjLrQ&s' },
  { name: 'WIND BOOSTER', logo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLUuPS01JQxztnuD8nUq_z06USHtCt3Ioaeq5ys757BFWbF3h3' },
  { name: 'STELLAR', logo: 'https://cdn.sanity.io/images/e2r40yh6/production-i18n/f6a60d469962ffaa3daecf860dc371b0d421561d-1800x1800.png?rect=0,394,1800,1013&w=654&h=368&auto=format&dpr=2' },
  { name: 'GALIO', logo: 'https://galioindia.com/cdn/shop/files/500x500_f1350747-ff9b-42c8-befa-e839e25e623c.png?v=1743485933' },
  { name: 'Dr. Artex', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnoxHhx-dsBmQtmMjdzUdYI2HQu7HVsecWjw&s' },
  { name: 'Audison', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4i5Ts11Vw8rHQihBiYOOcx43ca0K-EfEYA&s' },
  { name: 'Helix', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6tpTdgpwz4jvQkJ3Tw_VtUimSazcX85J1w&s' },
  { name: 'Blaupunkt', logo: 'https://play-lh.googleusercontent.com/a8wx78WK0eMJd3bC0R-g0jzkVvTCZv3WfrWMmhVf9lCma4V3lC0dr2nDO1CE-zPMU4Q' },
  { name: 'DHC', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzl4OjMvon9kxQQR4ql3YVhZC7c4rZ7FjIQ&s' },
  { name: 'M-TEK', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Dh6Rj_Efb8XfXO5CNGf4qT6EDUhWtuXBow&s' },
  { name: 'ALPINE', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Alpine_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' },
  { name: 'MTX', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWoPeYcwgDo04BkH_q5gkiyTmxYY7xl1WGA&s' },
  { name: 'JBL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/JBL-Logo.svg/3840px-JBL-Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
  { name: 'PIONEER', logo: 'https://download.logo.wine/logo/Pioneer_Corporation/Pioneer_Corporation-Logo.wine.png' },
  { name: 'INFINITY', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F2iK9Uz5mk2EYVa_qSUmD-xseFkKv-w91A&s' },
  { name: 'NAUTILUS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkiQo2DrVQdklnmHNBlDj_HiOEcB1oNvClPQ&s' }
];

export default function Brands() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="brands" className="brands section">
      <div className="container">
        <motion.div
          className="brands__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">🏆 Trusted Brands</span>
          <h2 className="section-title">
            Premium <span className="highlight">Partners</span>
          </h2>
          <p className="section-subtitle">
            We are authorized dealers for 30+ world-class car modification and audio brands.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="brands__marquee"
        >
          <div className="brands__track">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="brand-item glass-card">
                <div className="brand-item__logo">
                  {brand.logo ? (
                    <img src={brand.logo} alt={brand.name} className="brand-img" />
                  ) : (
                    brand.name.charAt(0)
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="brands__grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              className="brands__grid-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.02 * i, duration: 0.4 }}
            >
              <div className="brand-grid__logo">
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="brand-img" />
                ) : (
                  brand.name.charAt(0)
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
