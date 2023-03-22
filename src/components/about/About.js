import React,{useState} from 'react'
import Header from '../header/Header';
import ReactPlayer from 'react-player/lazy'
import video from "./videos/video.mp4"
import image from "./image/annote.png"
import {Link} from "react-router-dom"
import './about.css'
import { GiNightSleep } from 'react-icons/gi';
import { BsSun } from 'react-icons/bs';

const About = ({darkMode,setDarkMode}) => {
  const [currentField,setCurrentField] = useState("Introduction")
  let data = {
    Introduction:{
      para1:"Ruminants such as dairy cattle typically eat quickly with minimal chewing.During rumination, the cud is regurgitated, re-chewed, and re-swallowed.Chewing during rumination is slower and more consistent than during eating.The rumination process stimulates saliva production to help buffer the rumen pH and decrease feed particle size, allowing it to pass from the reticulum into the omasum. As partially digested feed passes through the omasum, water is absorbed, reducing the volume of material that arrives in the abomasum. The abomasum, often referred toas the true stomach, produces acid and digestive enzymes similar to the stomach of non-ruminant animals, further breaking down the feed before It passes into the lower gastrointestinal tract for further digestion, absorption and ultimately elimination.",
      para2:`The amount of time an animal spends ruminating is affected by species, breed, physical and chemical characteristics of the diet, health condition, feed intake, and production level. Approximately a third of the variation in rumination time in dairy cattle has been shown to be related to feed intake, primarily two main diet components which are NDF and starch. Rumination can occur anytime throughout the day but tends to follow a daily pattern, with cattle spending a greater proportion of time ruminating at night and following feeding periods.`,
      para3:`Even though lower average rumination time in cows pre-calving has been associated with potential health problems post-calving, almost all cows will experience a sharp decrease in rumination time immediately before calving. This sharp decrease in rumination time typically begins about 6 hours pre-calving and is associated with a decreased eating time and decreased dry matter intake. This sharp decline in rumination time could potentially be used as an indication of calving. `,
      para4:`Temperature and humidity can affect rumination in dairy cattle as shown in ref. Rumination time begins to decrease the day before estrus, hitting a minimum level on the day of estrus. On the day before and day of estrus, cows can ruminate more than an hour less per day compared to baseline rumination levels. Rumination will return to baseline levels by the day after estrus. When paired with activity data, the decrease in rumination can be used to help better identify the optimum breeding time. 
      Thus rumination activity can help provide insight into the health of dairy cattles which can be used to take the necessary actions by the dairy industry. 
      The proposed system includes an image capture rig that goes over each lot in the cattle shed pausing at each lot for a certain time interval before moving on to the next. The image capture rig consists of both visible light sensor camera and thermal imaging sensor, either of which are used based on the lighting conditions. Rumination detection is done on the video feed via keypoint detection which detects the lower and upper jaw of cattle and activity recognition is performed on the keypoint data over a period of time using LSTM RNN. 
      `
    },
    Workdone:{
      heading:"A.	Keypoint detection ",
      para1:`Keypoint detection consists of locating key object parts. For example, the key parts of our faces include nose tips, eyebrows, eye corners, and so on. These parts help to represent the underlying object in a feature-rich manner. Keypoint detection has applications that include pose estimation, face detection, etc. 
      Torchvision has a pretrained Keypoint Detection model, in its detection module. The model is built on top of the ResNet-50 FPN (Feature Pyramid Network) backbone. Feature Pyramid Network is the concept of fusing feature maps at multiple scales to preserve information at multiple levels. This backbone architecture was also used in RetinaNet (which introduced Focal-Loss). Keypoint RCNN slightly modifies the existing Mask RCNN, by one-hot encoding a keypoint (instead of the whole mask) of the detected object. By default this model can detect 17 key points for humans. This model is trained on our custom dataset for cattle.`,
      para2:`Our LSTM model is initialized with a hidden dimension (hidden_dim) of 50 and is trained with PyTorch Lightning. We have used the Adam optimiser and also configured the ReduceLROnPlateau scheduler to reduce the learning rate, based on the value of val_loss.
      A Recurrent Neural Network with its chain of repeated neural-network modules`,
      heading2:`B.	LSTM RNN`,
      para3:`LSTM stands for long short-term memory networks, used in the field of Deep Learning. It is a variety of recurrent neural networks (RNNs) that are capable of learning long-term dependencies, especially in sequence prediction problems. LSTM has feedback connections, i.e., it is capable of processing the entire sequence of data, apart from single data points such as images. This finds application in speech recognition, machine translation, etc. LSTM is a special kind of RNN, which shows outstanding performance on a large variety of problems.
      The central role of an LSTM model is held by a memory cell known as a ‘cell state’ that maintains its state over time. The cell state is the horizontal line that runs through the top of the below diagram. It can be visualized as a conveyor belt through which information just flows, unchanged. Information can be added to or removed from the cell state in LSTM and is regulated by gates. These gates optionally let the information flow in and out of the cell. It contains a pointwise multiplication operation and a sigmoid neural net layer that assist the mechanism. The sigmoid layer gives out numbers between zero and one, where zero means ‘nothing should be let through,’ and one means ‘everything should be let through.’
      `,
      heading3:`C.	Dataset `,
      para4:`    The custom dataset consists of images of cows with various variations including but not limited to mouth open, closed, close up, etc. The images are fetched from the internet using duckduckgo image search API in python. 
      The 167 images downloaded  are then uploaded to roboflow where it is annotated in such a way that each image consists of three bounding boxes. One representing the mouth of the cattle and two bounding boxes are used inplace of keypoints denoting the location of the cattle’s lower and upper jaws.
       The roboflow webtool split the 167 images into train, test and validation sets. Augmentation such as horizontal flip is done in roboflow itself, finally resulting in a dataset containing 194 training images, 33 validation images and 18 testing images. The dataset is downloaded from roboflow in 
       YOLO v5 PyTorch Format which consists of TXT and YAML files for the labels. 
         As mentioned above 2 bounding boxes are used in place of 2 key points. We convert the bounding box details into keypoint location and then store the final annotations in JSON files.  
       `,
       heading4:`D.	Model Training `,
       para5:`The models are trained on Google Colab which provides free GPU instances. The Keypoint detection model is trained mainly using different approaches. Among them training the model from scratch for 5 epochs yielded the worst results and so far best results were yielded by training the model from scratch for 1st 50 epochs and then doing another 56 epochs with the weights from the previous epochs. The model was able to predict keypoints with mAP(mean Average Precision) of 0.394 and mAR(mean Average Recall) of 0.7328 resulting in a f1-score of 0.5125. It can be inferred that the model is predicting more false positives. Average Precision(AP) is calculated as the weighted mean of precisions at each threshold; the weight is the increase in recall from the prior threshold. Mean Average Precision is the average of AP over all IOU(Intersection Over Union) thresholds. The key points identified from the model are fed to The LSTM which is trained to identify rumination action based on the cows mouth movement .`,
       heading5:`E.	Overall System Design `,
       para6:`The system consists of a camera rig containing both thermal and visible light cameras which operate based on the lighting conditions and camera rig moves across the cattle lots in the shed pausing over at each lot to capture sufficient video feed for each lot . The video feed is then sent to an edge computing device such as Raspberry Pi3B where the rumination activity for a cattle in a lot is logged over a period of time. Here the cattle are identified by the lots.indicated by the rig position. The rumination log is stored in cloud and a dashboard website is used to give analytics on the rumination activity of cattle on the lots. `

    },
    Conclusion:{
      para1:`In this paper, we proposed an effective recognition method with video to monitor and classify cow behavior using deep learning approaches. These technologies 
      proved their potential in complex environments such as farms. They enabled conducting a monitoring method without appealing to these attached and invasive devices. Despite the surrounding inferences (e.g., sunlight and poor lighting) that produced undesirable effects on cow movements such as chewing or swallowing behaviors, we were able to accurately recognize these deep features of rumination behavior using all postures of the dairy cow
      `,
      para2:""
    }
  }
  return (
    <div>
        <Header darkMode={darkMode} style={{backgrounColor:"black"}} />
        <div className={darkMode?`darkMode-btn`:`darkMode-btn dark`} onClick={()=>setDarkMode(darkMode => !darkMode)}>{!darkMode?<GiNightSleep/>:<BsSun/>}</div>

        <div className='about-content'>
            <div className={darkMode?'content':'content dark'}>
              <div className='para mt-2'>
                <h4>{data[currentField]?.heading}</h4>
                <p>{data[currentField]?.para1}</p>
                <p>{data[currentField]?.para2}</p>
                <h4>{data[currentField]?.heading2}</h4>
                <p>{data[currentField]?.para3}</p>
                <h4>{data[currentField]?.heading3}</h4>
                <p>{data[currentField]?.para4}</p>
                <h4>{data[currentField]?.heading4}</h4>
                <p>{data[currentField]?.para5}</p>
                <h4>{data[currentField]?.heading5}</h4>
                <p>{data[currentField]?.para6}</p>
                {
                  currentField === "Conclusion" && (
                    <div>
                      <img src={image} alt="" className='annotate-image'/>
                    </div>
                  )
                }
              </div>
              <div className={darkMode?'about-heading':'about-heading dark'}>
                <h1 className={darkMode?'':'dark'}>{currentField}</h1>
              </div>
            </div>

            <div className={darkMode?'about-img-btn':'about-img-btn dark'}>
                <div className='about-video'>
                  <ReactPlayer className="video" url={video}  playing={true} muted={true} loop/>
                </div>
                <div className='d-flex gap-3'>
                  <button className={darkMode?'about-btn':'about-btn dark'} onClick={()=>setCurrentField("Introduction")}>Introduction</button>
                  <button className={darkMode?'about-btn':'about-btn dark'} onClick={()=>setCurrentField("Workdone")}>Workdone</button>
                  <button className={darkMode?'about-btn':'about-btn dark'} onClick={()=>setCurrentField("Conclusion")}>Conclusion</button>
                </div>
                <div className={darkMode?'card':'card dark'}>
                  <div className="drop_box">
                    <Link to="">
                      <button className={darkMode?'btn':'btn dark'}>Upload</button>
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
