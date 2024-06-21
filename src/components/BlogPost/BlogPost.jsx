import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogPost.module.css';


// images for "Getting Started With Archery" blog
import gs_title from '../../assets/blogs/getting_started/title_image.png';
import gs_01 from '../../assets/blogs/getting_started/gs_01.jpg'
import gs_02 from '../../assets/blogs/getting_started/gs_02.jpg'
import gs_03 from '../../assets/blogs/getting_started/gs_03.jpg'
import gs_04 from '../../assets/blogs/getting_started/gs_04.png'

const sources = [
  // to add more blog content, start from Blog.jsx, and then come here
  {
    title: 'Getting Started with Archery',
    intro: 'Whether you are intrigued by archery for fun or competition, getting started can be an exciting journey for all ages.',
    content: `
      <p>
        Archery is one of the earliest sports, dating from approximately 60,000 – 72,000 years ago, that has evolved into a popular recreational activity and competitive discipline. Whether you are intrigued by archery for fun or competition, getting started can be an exciting journey for all ages. This beginner's guide will walk you through everything you need to know to commence your archery adventure.
      </p>

      <h2>What Is Archery?</h2>
      <p>
        For thousands of years, humans used a bow and a couple of arrows to excel their skills for hunting and warfare. Now, it is played along with other sports for competitiveness and leisure, providing benefits like patience, control, and focus. Like most of the sports, archery has its variations:
      </p>

      <ul>
        <li>
          <p><b>Target Archery: </b>The fundamental archery, where players shoot at stationary circular targets from set distances. Beginners start from 10 metres and promote to 20, 30, 50, and 70 metres.</p>
          <img style="width: 50%; height: auto; margin-left: auto; margin-right: auto;" src="${gs_01}" />
        </li>
        <li>
          <p><b>Field Archery: </b>Involves shooting at targets of varying distances, often in wooded terrain. It is like our ancestors did when shooting animals or enemies at different locations. It also has 3D Archery, which has 3D-printed animals instead of targets.</p>
          <img style="width: 50%; height: auto; margin-left: auto; margin-right: auto;" src="${gs_02}" />
        </li>
        <li>
          <p><b>Traditional Archery: </b>Archers use longbows (the most traditional ones) and recurve bows, which do not have modern accessories.</p>
        </li>
        <li>
          <p><b>Compound Archery: </b>Uses compound bows with pulleys and cams for increased accuracy and power.</p>
          <img style="width: 50%; height: auto; margin-left: auto; margin-right: auto;" src="${gs_03}" />
        </li>
      </ul>
      
      <h2>The Equipment</h2>
      <p>Starting with the bows, you have:</p>
      <ul>
        <li><b>Recurve Bow:</b> Known for its simplicity, this one is played for the Olympics. It is a great starting point due to its straightforward design.</li>
        <li><b>Compound Bow:</b> More complex, with a system of pulleys and cables, providing greater power and accuracy. Compound bows are mainly used in hunting and target shooting.</li>
      </ul>
      <p>About the arrows, there are consideration factors:</p>
      <ul>
        <li><b>Material:</b> Arrows are wood, aluminium, carbon, or a combination of the three. Carbon arrows are normally used due to their durability and performance.</li>
        <li><b>Spine:</b> It refers to the flexibility of the arrow. The correct spine depends on your bow’s draw weight and your draw length.</li>
        <li><b>Length:</b> Ensure the arrows are as long as your draw length to avoid accidents and ensure proper flight.</li>
      </ul>
      <p>With time, you will also be equipped with these:</p>
      <ul>
        <li><b>Arm Guard:</b> Protects your forearm from the bowstring.</li>
        <li><b>Finger Tab or Glove:</b> Protects your fingers when drawing the string.</li>
        <li><b>Quiver:</b> Holds your arrows.</li>
        <img style="width: 50%; height: auto; margin-left: auto; margin-right: auto;" src="${gs_04}" />
      </ul>

      <h2>Getting The Best Shot</h2>
      <h3>Stance and Posture</h3>
      <ul>
        <li><b>Stance:</b> Stand perpendicular to the target with your feet shoulder-width apart. In this way, you will evenly distribute your weight.</li>
        <li><b>Posture:</b> Keep your back straight, shoulders relaxed, and head upright. Your bow arm (the arm holding the bow) should be slightly bent, not locked.</li>
      </ul>
      <h3>Nocking</h3>
      <p>With the bow in your hand, now you will "nock" the arrow. Place the arrow on the arrow rest and attach the nock (the back end of the arrow) onto the bowstring, ensuring it "clicks" into place (you will feel the clicking).</p>

      <h3>Drawing The Bow</h3>
      <p>Use your back muscles to draw the string towards your face. Your hand should come to a consistent anchor point (i.e., the corner of your mouth or chin).</p>

      <h3>Aiming</h3>
      <p>Focus on the target and align your sight (which you will use when you progress with time) with the target. If shooting instinctively, concentrate on the spot you want to hit without using a sight.</p>

      <h3>Releasing the Arrow</h3>
      <p>Release the string smoothly by relaxing your fingers and taking them back at the same time, allowing the bowstring to propel the arrow forward. Avoid flinching or moving your hand upon release.</p>

      <h3>Follow Through</h3>
      <p>Maintain your stance and posture after releasing the arrow until it hits the target. It is quite important to do because it ensures consistency and accuracy.</p>

      <h2>Be Safe</h2>
      <p>Safety is paramount in archery. Here are some essential safety tips:</p>
      <ul>
        <li><b>Never Dry Fire:</b> Do not draw and release the bowstring without an arrow, or it can damage the bow and cause injury.</li>
        <li><b>Check Equipment:</b> Regularly inspect your equipment for wear and damage. Let your coach examine it from time to time.</li>
        <li><b>Use a Backstop:</b> Ensure there's a safe backstop behind your target to catch missed arrows. There must be no one behind the targets and no walls that can damage the arrows.</li>
        <li><b>Be Aware of Your Surroundings:</b> Always ensure the shooting range is clear of people, animals, and obstacles.</li>
        <li><b>Follow Range Rules:</b> Adhere to the rules and guidelines of the archery range or club you attend.</li>
      </ul>

      <h2>Where To Start?</h2>
      <p>Joining an archery range or club is highly recommended for beginners. It provides a safe environment, access to experienced archers and coaches, and often rental equipment. Look for local archery clubs or ranges online or ask for recommendations from fellow archers. Here in Karachi, you can contact BaKamaan, who will tell you the location of an archery club near you.</p>
      <p>Archery is as much about community as it is about the sport. Joining archery clubs or online forums can provide valuable resources, support, and camaraderie. Participate in local tournaments and events to meet fellow archers and enhance your skills.</p>

      <h2>Conclusion</h2>
      <p>Starting your journey in archery can be incredibly rewarding. With the right equipment, proper technique, and a focus on safety, you will excel in no time. Remember, archery is a sport of patience and precision, so take your time to enjoy the process and celebrate your progress. Whether you aim to compete or simply enjoy the meditative practice of shooting, archery offers a fulfilling experience for all.</p>
      <p>Happy shooting, and welcome to the world of archery!</p>
    `,
    date: '21st June 2024',
    image: gs_title
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const blogPost = sources[id];

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className={styles.blogPostContainer}>
      <h1>{blogPost.title}</h1> 
      <p className={styles.date}> {blogPost.date}</p>
      <img src={blogPost.image} alt={blogPost.title} />
      <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
    </div>
  );
};

export default BlogPost;
