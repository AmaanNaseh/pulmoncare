import React from "react";
import bridge_pose from "../assets/bridge_pose.png";
import cat_pose from "../assets/cat_pose.png";
import wheel_pose from "../assets/wheel_pose.png";
import upward_dog_pose from "../assets/upward_dog_pose.png";
import downward_dog_pose from "../assets/downward_dog_pose.png";

const YogaAsans = () => {
  return (
    <>
      <h1 className="text-2xl font-bold italic text-center mx-auto mb-10">
        Yoga Asanas
      </h1>

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="w-[300px] mx-auto">
            <img src={bridge_pose} alt="Yoga Asan" className="w-full" />
          </div>
          <h1 className="font-bold text-lg lg:text-xl text-center">
            Bridge Pose / Setu Bandha Asana
          </h1>
          <p>
            <span className="font-bold">Purpose:</span> Opens the chest,
            strengthens the lungs, and improves circulation.
          </p>
          <p className="font-bold">Steps: </p>
          <ul>
            <li>
              1. Lie on your back, bend your knees, and place feet hip-width
              apart on the floor.
            </li>
            <li>2. Keep arms beside your body, palms down.</li>
            <li>
              3. Inhale and lift your hips while pressing feet and arms into the
              floor.
            </li>
            <li>
              4. Clasp hands under your back and roll shoulders underneath.
            </li>
            <li>
              5. Breathe deeply, hold for 30 seconds to 1 minute, then exhale
              and release gently.
            </li>
          </ul>
        </div>

        <div className="mx-auto w-full md:w-[75%] lg:w-[50%] h-[2px] bg-white" />

        <div className="flex flex-col gap-4">
          <div className="w-[300px] mx-auto">
            <img src={cat_pose} alt="Yoga Asan" className="w-full" />
          </div>
          <h1 className="font-bold text-lg lg:text-xl text-center">
            Cat Pose / Marjarya Asana
          </h1>
          <p>
            <span className="font-bold">Purpose:</span> Promotes deep breathing,
            relieves tension around the lungs, and improves spinal flexibility.
          </p>
          <p className="font-bold">Steps: </p>
          <ul>
            <li>
              1. Start in tabletop position with hands under shoulders, knees
              under hips.
            </li>
            <li>
              2. Inhale, lift your head and tailbone, arching your back (Cow).
            </li>
            <li>3. Exhale, round your spine, tuck chin to chest (Cat).</li>
            <li>
              4. Move slowly with each breath, synchronizing breath with motion.
            </li>
            <li>
              5. Repeat for 1–2 minutes to improve lung and spine flexibility.
            </li>
          </ul>
        </div>

        <div className="mx-auto w-full md:w-[75%] lg:w-[50%] h-[2px] bg-white" />

        <div className="flex flex-col gap-4">
          <div className="w-[300px] mx-auto">
            <img src={wheel_pose} alt="Yoga Asan" className="w-full" />
          </div>
          <h1 className="font-bold text-lg lg:text-xl text-center">
            Wheel Pose / Chakra Asana
          </h1>
          <p>
            <span className="font-bold">Purpose:</span> Expands the chest and
            rib cage, increases lung capacity, and energizes the body.
          </p>
          <p className="font-bold">Steps: </p>
          <ul>
            <li>
              1. Lie on your back, bend knees, place feet flat and hands beside
              ears.
            </li>
            <li>
              2. Inhale, press into hands and feet, lifting torso off the floor.
            </li>
            <li>3. Straighten arms and legs, arch back, and open the chest.</li>
            <li>4. Keep breathing deeply, expanding the lungs fully.</li>
            <li>
              5. Hold for 15–30 seconds, then exhale and slowly lower down.
            </li>
          </ul>
        </div>

        <div className="mx-auto w-full md:w-[75%] lg:w-[50%] h-[2px] bg-white" />

        <div className="flex flex-col gap-4">
          <div className="w-[300px] mx-auto">
            <img src={upward_dog_pose} alt="Yoga Asan" className="w-full" />
          </div>
          <h1 className="font-bold text-lg lg:text-xl text-center">
            Upward Facing Dog / Urdhva Mukha Svana Asana
          </h1>
          <p>
            <span className="font-bold">Purpose:</span> Expands the lungs, opens
            the chest, strengthens the diaphragm and intercostals.
          </p>
          <p className="font-bold">Steps: </p>
          <ul>
            <li>
              1. Lie face down, hands under shoulders, feet flat on the floor.
            </li>
            <li>
              2. Inhale, press into hands, lifting chest and thighs off the mat.
            </li>
            <li>3. Keep arms straight, shoulders rolled back, chest open.</li>
            <li>
              4. Extend the spine and breathe into the front of your lungs.
            </li>
            <li>
              5. Hold for 20–30 seconds, then release or transition to Downward
              Dog.
            </li>
          </ul>
        </div>

        <div className="mx-auto w-full md:w-[75%] lg:w-[50%] h-[2px] bg-white" />

        <div className="flex flex-col gap-4">
          <div className="w-[300px] mx-auto">
            <img src={downward_dog_pose} alt="Yoga Asan" className="w-full" />
          </div>
          <h1 className="font-bold text-lg lg:text-xl text-center">
            Downward Facing Dog Pose / Adho Mukha Svana Asana
          </h1>
          <p>
            <span className="font-bold">Purpose:</span> Strengthens the lungs,
            elongates the spine, improves blood flow to the brain and lungs.
          </p>
          <p className="font-bold">Steps: </p>
          <ul>
            <li>
              1. Begin in tabletop, tuck toes under, lift hips up and back.
            </li>
            <li>
              2. Form an inverted "V" shape with body; straighten arms and legs.
            </li>
            <li>3. Press heels toward the ground, spread fingers wide.</li>
            <li>4. Relax neck, gaze between legs or at the belly.</li>
            <li>
              5. Hold for 1–2 minutes, breathing deeply into the ribs and back.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default YogaAsans;
