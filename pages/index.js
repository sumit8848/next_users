import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
// import {useEffect} from 'react'

export default function Home() {
//   function checkOrientationChange()
// {
//   let screenOrientation = window.orientation;
//   switch(screenOrientation){
//     case 0: console.log('you are in portrait-primary mode');
//       break;
//     case 90: goFullScreen();
//       break;
//     case 180: goFullScreen();
//       break;
//     case 270: goFullScreen();
//       break;
//     default: console.log('implementation of screen orientation');
//   }
// }

// // function to request full screen of device browser

// function goFullScreen () {
// var elem = document.getElementById("myContent");
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen().then(data=> {
//     lockScreenOrientation();
//     }, err => {
//     console.log('no');
//     });
//   } else if (elem.mozRequestFullScreen) { /* Firefox */
//     elem.mozRequestFullScreen().then(data=> {
//     lockScreenOrientation();
//     }, err => {
//     console.log('Full Screen request failed');
//     });
//   } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//     elem.webkitRequestFullscreen().then(data=> {
//     lockScreenOrientation();
//     }, err => {
//     console.log('Full Screen request failed');
//     });
//   } else if (elem.msRequestFullscreen) { /* IE/Edge */
//     elem.msRequestFullscreen().then(data=> {
//     lockScreenOrientation();
//     }, err => {
//     console.log('Full Screen request failed');
//     });
//   }
// }

// //function to lock the screen. in this case the screen will be locked in portrait-primary mode.

// function lockScreenOrientation () {
//         screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;

//     if (screen.lockOrientationUniversal("landscape-primary")) {
//       // Orientation was locked
//     } else {
//       // Orientation lock failed
// }
// }
  // useEffect(()=>{
  // //   window.addEventListener('orientationchange', checkOrientationChange);
  // //   window.addEventListener('scroll', checkOrientationChange);
  //   window.addEventListener('scroll', ()=>{
  //     // const ol = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || screen.orientation.lock;
  //     screen.orientation.lock(screen.orientation.type).then(
  //      console.log('success1')
  //     )
  //     // ol(screen.orientation.type).then(
  //     //  console.log('success2')
  //     // )
  //   })
  //   window.addEventListener('orientationchange', ()=>{
  //     // screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
  //     screen.orientation.lock(screen.orientation.type).then(
  //       console.log('success3')
  //     )
  //   })
  // },[])
  // useEffect(function mount() {
  //   function onScroll() {
  //     console.log("scroll!");
  //   }
  //   window.addEventListener("scroll", onScroll);
  // });
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>See Users Listing</a>
        </Link>
      </div>
    </>
  )
}