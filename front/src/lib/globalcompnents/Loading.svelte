<div class="continuous-10"></div>

<style>
   .continuous-10 {
    width: 120px;
    height: 20px;
    background: linear-gradient(#514b82 0 0) left -40px top 0/40px 100% no-repeat #eee;
    -webkit-mask:
      linear-gradient(#000 0 0) top   /100% 5px no-repeat,
      linear-gradient(#000 0 0) bottom/100% 5px no-repeat,
      repeating-linear-gradient(90deg,#000 0 5px, #0000 0 20%) left/calc(100% - 5px) 100%;
      mask: 
      linear-gradient(#000 0 0) top   /100% 5px no-repeat,
      linear-gradient(#000 0 0) bottom/100% 5px no-repeat,
      repeating-linear-gradient(90deg,#000 0 5px, #0000 0 20%) left/calc(100% - 5px) 100%;
      ;
    animation: ct10 1s infinite linear;
}

@keyframes ct10 {
  100% {background-position: right -40px top 0}
} 
</style>