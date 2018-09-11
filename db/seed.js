const { WODs } = require("../models/Workout")
const mongoose = require('./connection')

WODs.find({}).remove(() => {
  WODs.create({
    content: "For Time",
    rounds: "21-15-9",
    movement1: "Burpees",
    movement2: "Pull-Ups",
    image: "https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  })
  WODs.create({
    content: "As Many Rounds as Possible",
    rounds: "20 minutes",
    movement1: "50-Meter Weighted Lunge-95lbs",
    movement2: "25-Box Jump-24inch",
    movement3: "400 meter run",
    movement4: "Max Pushups",
    image: "https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  })
  WODs.create({
    content: "For Time",
    rounds: " 3 Rounds",
    movement1: "30 Squat Cleans-95lbs",
    movement2: "30 Pull-Ups",
    movement3: "800 meter run",
    image: "https://images.pexels.com/photos/9806/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  })
  WODs.create({
    content: "For Time",
    rounds: "5 rounds",
    movement1: "15 Dumbbell Cleans",
    movement2: "21 Pull-Ups",
    image: "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  })
  WODs.create({
    content: "As Fast as Possible",
    rounds: "Once through",
    movement1: "1 Mile Run",
    movement2: "100 Pulls-ups",
    movement3: "300 Air Squats",
    movement4: "1 mile run",
    image: "https://images.pexels.com/photos/1346300/pexels-photo-1346300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  })
  WODs.create({
    content: "For Time",
    rounds: "One through",
    movement1: "100 air squats",
    movement2: "5 Muscle-Ups",
    movement3: "75 air squats",
    movement4: "10 Muscle-Ups",
    movement5: "50 air squats",
    movement6: "15 Muscle-Ups",
    image: "https://images.pexels.com/photos/622297/pexels-photo-622297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  })
  WODs.create({
    content: "For Time",
    rounds: "21-15-9",
    movement1: "95lbs-Thruster",
    movement2: "Pull-ups",
    image: "https://image.boxrox.com/2016/06/adrian-mundwiler-thrusters-800x420.jpg"
  })
})