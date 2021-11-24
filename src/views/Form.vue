<template>
	<main>
		<section class="contact-form">
      	<h1>Sign up for the Weekly Newsletter</h1>
      	<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia, commodi eveniet eos laborum, consectetur aliquam hic odio sunt quibusdam quos itaque recusandae dolorum asperiores dolores qui ipsum, atque beatae?</h2>

			<input class="contact-form__input" type="name" placeholder="Name:" v-model="form.name" />
			<input class="contact-form__input" type="email" placeholder="E-mail:" v-model="form.email" />
			<input class="contact-form__input" type="dateOfBirth" placeholder="Date of birth (dd/mm/yy):" v-model="form.dateOfBirth" />
			<input class="contact-form__input" type="country" placeholder="Country:" v-model="form.country" />
			<input class="contact-form__input" type="city" placeholder="City:" v-model="form.city" />
			<input class="contact-form__input" type="zipCode" placeholder="Zip Code:" v-model="form.zipCode" />
			<input class="contact-form__input" type="street" placeholder="Street:" v-model="form.street" />
			<input class="contact-form__input" type="houseNumber" placeholder="House Number:" v-model="form.houseNumber" />
		</section>

		<section class="contact-info">
			<div class="contact-info__output"> {{form.name}} </div>
			<div class="contact-info__output"> {{form.email}} </div>
			<!-- må gjøres om til funksjoner: -->
			<div class="contact-info__output"> Born in {{form.dateOfBirth}} </div>
			<div class="contact-info__output"> Lives in {{form.street}} {{form.houseNumber}} </div>
			<!-- ---------------------------- -->
			<div class="contact-info__output">  {{form.zipCode}} {{form.city}} </div>
			<div class="contact-info__output">  {{form.country}}  </div>
			<button class="contact-info__button" @click="submit_form">Submit</button>
		</section>
	</main>
	
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: null,
					email: null,
               dateOfBirth: null,
               country: null,
               city: null,
               zipCode: null,
               street: null,
               houseNumber: null,
               area: null,
					message: null,
					
				},
			};
		},

		methods: {
			submit_form() {
				alert(`Welcome to our newsletter, ${this.form.name}!`);
			},
		},
	};
</script>

<style>

	main {
		display: flex;
		margin-bottom: 10px;
	}
	
	.contact-form {
      width: 60%;
		display: flex;
		flex-flow: column nowrap;
      border-right: solid black 1px;
	}

	.contact-form__input + .contact-form__input {
		margin-top: 0.5em;
	}

	.contact-form__input {
		width: 50%;
		margin: 10px;
		/* border: 1px solid black; */
	}

	.contact-info {
		width: 40%;
	}

	.contact-info__output {
		margin: 10px;
	}

	.contact-info__button {
		font-size: 1.5rem;
		margin: 10px;
		
	}
</style>