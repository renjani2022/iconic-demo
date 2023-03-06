import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-header'>
          <IonTitle className='ion-title'>Ready to play?</IonTitle>
          <br />
          </IonToolbar>
      </IonHeader>
      <IonContent className='ion-content'>
      </IonContent>
      <IonFooter className='ion-footer'>
      <IonTitle className='ion-title'>Enjoy the game!</IonTitle>
      <br />
      </IonFooter>

    </IonPage>
  );
};

export default Home;
