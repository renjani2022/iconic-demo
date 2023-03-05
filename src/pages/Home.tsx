import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import QuizComp from '../components/QuizComp';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-header'>
          <IonTitle className='ion-title'>Ready to play?</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent className='ion-content'>
        <QuizComp />
      </IonContent>
      <IonFooter className='ion-footer'>
      <IonTitle className='ion-title'>Enjoy the game!</IonTitle>
      </IonFooter>

    </IonPage>
  );
};

export default Home;
