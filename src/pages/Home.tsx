import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Questions from '../components/Questions';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-header'>
          <IonTitle className='ion-title'>JS Quiz 📢 <span><img src="./quiz.png" alt="" /></span></IonTitle>
          <img src="./quiz.png" alt="" />
          </IonToolbar>
      </IonHeader>
      <IonContent className='ion-content'>
        <ExploreContainer/>
        <Questions />
      </IonContent>
      <IonFooter className='ion-footer'>
      <IonTitle className='ion-title'>Enjoy the game! 💯</IonTitle>
      <img src="./quiz.png" alt="" />
      </IonFooter>

    </IonPage>
  );
};

export default Home;
