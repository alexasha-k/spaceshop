<template>
  <svg width="1110" height="500"></svg>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "SvgContactsFilter",
  props: ["data", "filter-group"],
  mounted() {
    this.drawImage();
  },
  methods: {
    drawImage: function() {
      const vm = this;
      const svg = d3.select(this.$el);

      const width = +svg.attr("width");
      const height = +svg.attr("height");

      svg
        .append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "#fafafa");

      const field = svg.append("g");
      const secondLevelDecoration = field
        .append("circle")
        .attr("r", 120)
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("fill", "none")
        .attr("stroke", "lightgreen")
        .attr("stroke-width", 2);

      const thirdLevelDecoration = field
        .append("circle")
        .attr("r", 200)
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("fill", "none")
        .attr("stroke", "lightblue")
        .attr("stroke-width", 2);

      const colors = ["lightblue", "lightyellow", "lightpink"];
      const computeCircleTransform = (id, key) => {
        let x;
        let y;
        let radius;
        let count;
        switch (id) {
          case 1:
            radius = 0;
            count = 1;
            break;
          case 2:
            radius = 120;
            count = 5;
            break;
          default:
            radius = 200;
            count = 4;
        }
        const angle = ((2 * Math.PI) / count) * key + Math.PI / id;
        x = Math.cos(angle) * radius;
        y = Math.sin(angle) * radius;
        return `translate(${x},${y})`;
      };
      const filterButtons = field
        .append("g")
        .selectAll("g")
        .data(this.data)
        .enter()
        .append("g")
        .classed("filter-btn", true);

      filterButtons
        .append("circle")
        .attr("r", d => 30 - (d.locationGroup - 1) * 10)
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("fill", d => colors[d.locationGroup - 1])
        .attr("transform", (d, i) =>
          computeCircleTransform(d.locationGroup, i)
        );

      filterButtons
        .append("text")
        .attr("dx", width / 2 + 6)
        .attr("dy", height / 2 + 4)
        .attr("transform", (d, i) => computeCircleTransform(d.locationGroup, i))
        .classed("contacts-filter__label", true)
        .text(d => d.name);

      const filterLegend = field
        .append("g")
        .selectAll("g")
        .data(colors)
        .enter()
        .append("g")
        .classed("contacts-filter__legend", true);

      filterLegend
        .append("rect")
        .attr("width", 32)
        .attr("height", 32)
        .attr("x", 60)
        .attr("y", (d, i) => 34 * i + 60)
        .attr("fill", d => d);

      const legend = ["Head office", "Solar System", "Deep Space"];
      filterLegend
        .append("text")
        .attr("x", 102)
        .attr("y", (d, i) => 34 * i + 82)
        .text((d, i) => legend[i]);

      d3.selectAll(".filter-btn").on("click", function(context) {
        vm.$emit("filter-group", context.name);
      });
    }
  }
};
</script>

<style lang="scss">
.contacts-filter__label {
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
