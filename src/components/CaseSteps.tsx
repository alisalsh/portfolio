
import styles from './CaseSteps.module.css';

type CaseStepsProps = {
  steps: string[];
};

function CaseSteps({ steps }: CaseStepsProps) {
  return (
    <div className={styles.steps}>
      {steps.map((step, index) => (
        <div
          className={styles.step}
          key={`${index}-${step}`}
          style={{ animationDelay: `${index * 70}ms` }}
        >
        <span className={styles.number}>
          ( {String(index + 1).padStart(2, '0')} )
        </span>

          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}

export default CaseSteps;
