import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Web Development',
    Svg: require('@site/static/img/web_dev.svg').default,
    description: (
      <>
        Unleash digital magic! We craft responsive, pixel-perfect websites that
        captivate, engage, and elevate your online presence. 🚀✨
      </>
    ),
  },
  {
    title: 'E-commerce Development',
    Svg: require('@site/static/img/ecom_dev.svg').default,
    description: (
      <>
        Transform clicks into customers! Our e-commerce wizardry ensures
        seamless, secure transactions and an irresistible online shopping
        experience. 🛒
      </>
    ),
  },
  {
    title: 'Headless CMS',
    Svg: require('@site/static/img/cms.svg').default,
    description: (
      <>
        Decouple content, amplify creativity! With our Headless CMS solutions,
        break free from design constraints and empower your content across
        channels. 🧠📝
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
