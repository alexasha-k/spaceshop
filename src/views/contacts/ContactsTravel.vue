<template>
  <div class="contacts-travel">
    <contacts-list :items="travel" :groups="planetList"></contacts-list>
  </div>
</template>

<script>
import ContactsList from "../../components/contacts/ContactsList";

export default {
  name: "ContactsTravel",
  data: () => ({
    travel: [
      {
        planet: "Earth",
        addressId: 1,
        address: "Brisbane, Australia",
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 2,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 2,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 2,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 2,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 2,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 3,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 3,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 3,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 3,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      },
      {
        planet: "Earth",
        address: "Brisbane, Australia",
        addressId: 3,
        name: "SpaceShop #1",
        workingHours: "10am-8pm",
        goodsTypes: ["Tours", "Tickets", "Souvenirs"]
      }
    ],
    planetList: [
      {
        locationGroup: 1,
        name: "Earth"
      },
      {
        locationGroup: 2,
        name: "Luna"
      },
      {
        locationGroup: 2,
        name: "Mars"
      },
      {
        locationGroup: 2,
        name: "Europe"
      },
      {
        locationGroup: 2,
        name: "Pluto"
      },
      {
        locationGroup: 2,
        name: "Io"
      },
      {
        locationGroup: 3,
        name: "E67DHFK"
      },
      {
        locationGroup: 3,
        name: "R6EUWOD"
      },
      {
        locationGroup: 3,
        name: "8UEHFBM"
      },
      {
        locationGroup: 3,
        name: "8EHFFUBE"
      }
    ]
  }),
  components: { ContactsList }
};
</script>
