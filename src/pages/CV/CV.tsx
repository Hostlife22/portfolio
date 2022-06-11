import cn from 'classnames';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import React, { useEffect } from 'react';
import {
  CVCertificate,
  CVEducation,
  CVExperience,
  CVHeader,
  CVHome,
  CVInterests,
  CVLanguages,
  CVProfile,
  CVReferences,
  CVScroll,
  CVSkills,
  CVSocial,
} from '../../cv';
import { scale } from '../../features/scaleCV/scaleCVSlice';
import { opt } from '../../helpers/cv-helpers';
import { useAppDispatch } from '../../hooks';
import styles from './CV.module.css';

function CV(): JSX.Element {
  const [body, setBody] = React.useState<HTMLBodyElement | null>();
  const resumeRef = React.useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const bodyElem = document.querySelector('body');
    bodyElem?.classList.add(styles.cv);
    setBody(bodyElem);

    return () => {
      bodyElem?.classList.remove(styles.cv);
    };
  }, []);

  const generateResume = () => {
    html2pdf(resumeRef.current, opt);
  };

  const scaleCV = () => {
    if (body) {
      body.classList.add(styles.scaleCV);
      dispatch(scale(true));
      generateResume();
      setTimeout(() => {
        body.classList.remove(styles.scaleCV);
        dispatch(scale(false));
      }, 500);
    }
  };
  return (
    <>
      <CVHeader />
      <main className={cn(styles.oneMain, styles.bdContainer)}>
        <div className={styles.resume} ref={resumeRef}>
          <div className={styles.resumeLeft}>
            <CVHome handler={scaleCV} />
            <CVSocial />
            <CVProfile />
            <CVEducation />
            <CVLanguages />
            <CVInterests />
          </div>
          <div className={styles.resumeRight}>
            <CVExperience />
            <CVCertificate />
            <CVSkills />
            <CVReferences />
          </div>
        </div>
      </main>
      <CVScroll />
    </>
  );
}

export default CV;
