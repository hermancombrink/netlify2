<template>
  <section id="iq-contact" class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box">
            <h2>Contact with our team</h2>
            <p>If you are planning on developing a product landing.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051"
            width="600"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen
          />
        </div>
        <div class="col-lg-6">
          <div class="">
            <img class="img-fluid" src="@/assets/images/35.png" alt="img">
            <h5 class="mb-3 mt-5">
              9840 Shore St. Fond Du Lac, WI 54935
            </h5>
            <p class="mb-0">
              0 1223 456 789
            </p>
            <p class="mb-0">
              mail@sofbox.com
            </p>
            <div class="deatils-social mt-5 mb-4">
              <ul class="share-social list-inline p-0">
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-facebook-f" /></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-twitter" /></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-github" /></a>
                </li>
                <li class="list-inline-item">
                  <a href="#"><i class="fab fa-instagram" /></a>
                </li>
              </ul>
            </div>
            <h4 class="mb-4">
              Get in Touch
            </h4>
            <form>
              <div class="row">
                <div class="col-lg-6">
                  <input
                    id="inputName"
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  >
                </div>
                <div class="col-lg-6">
                  <input
                    id="inputEmail"
                    type="Email"
                    class="form-control"
                    placeholder="Your Email"
                  >
                </div>
                <div class="col-lg-12">
                  <input
                    id="inputSubject"
                    type="text"
                    class="form-control"
                    placeholder="Your Subject"
                  >
                </div>
                <div class="col-lg-12">
                  <textarea
                    id="exampleFormControlTextarea1"
                    class="form-control"
                    rows="7"
                    placeholder="Your Message"
                  />
                </div>
                <div class="col-lg-12">
                  <a class="button" href="">Send Message</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import contactLogo from '@/assets/images/35.png'
export default {
  name: 'Contact',
  data () {
    return {
      titleSectionProp2: {
        title: 'Contact with our team',
        description: 'If you are planning on developing a product landing'
      },

      contactSectionProp: {
        class: 'pt-0',
        id: 'iq-contact'
      },
      contactDetail: {
        logo: contactLogo,
        address: '9840 Shore St. Fond Du Lac, WI 54935',
        number: '0 1223 456 789',
        mail: 'mail@sofbox.com'
      }
    }
  }
}
</script>
