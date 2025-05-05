import {IOSCalculator} from "./components/IOSCalculator.tsx";
import styles from "./App.module.scss"
function App() {

    return (
        <div className={styles.calculatorContainer}>
            <IOSCalculator/>
        </div>
    )
}

export default App
