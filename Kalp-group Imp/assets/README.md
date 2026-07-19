# Kalp Consumer Products - Assets Directory Guide

This directory is designated for local branding and marketing assets. Below is a checklist of image keys used in the HTML files and their specifications. Replace the placeholder URLs in the HTML code with local filenames as needed.

---

## 1. Logo
* **Target Filename**: `assets/images/logo.svg` or `assets/images/logo.png`
* **Current Implementation**: Inline SVG in the header markup representing a B2B chemical drop.
* **Replacement Instruction**: If swapping with a PNG logo, replace the `<span class="logo-icon">...</span>` SVG block with:
  ```html
  <img src="assets/images/logo.png" alt="Kalp Logo" style="height: 40px;">
  ```

---

## 2. Hero Background Banner
* **Location**: `index.html` (Hero Section)
* **Current Placeholder**: `https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1600`
* **Ideal Asset**: High-resolution wide photograph of a chemical manufacturing site, biorefinery columns, or raw material logistics storage.
* **Local Path Reference**: `assets/images/hero_bg.jpg`

---

## 3. About Section Highlight
* **Location**: `index.html` (About Short Section), `about.html` (Sustainability Section)
* **Current Placeholders**: 
  * `https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800` (Laboratory technician)
  * `https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800` (Sustainability / plants)
* **Ideal Assets**: Cleanroom analytical testing laboratory, logistics warehouses, or environmental restoration efforts.
* **Local Path References**: 
  * `assets/images/about_lab.jpg`
  * `assets/images/about_sustainability.jpg`

---

## 4. Product Category Cards
* **Location**: `index.html` (Product range grid)
* **Current Placeholders**:
  * **Oleochemicals**: `https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600` (Plant-based oils)
  * **Industrial Solvents**: `https://images.unsplash.com/photo-1617155093730-a8bf47be792d?auto=format&fit=crop&q=80&w=600` (Vials and liquid mediums)
  * **Polymer Additives**: `https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=600` (Compound pellets)
* **Ideal Assets**: Real packshots of product packaging (standard drums/IBCs) or chemical liquids with branded lab equipment.
* **Local Path References**:
  * `assets/images/cat_oleo.jpg`
  * `assets/images/cat_solvents.jpg`
  * `assets/images/cat_additives.jpg`
