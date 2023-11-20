const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    //find all categories from Category model
    const categoriesData = await Category.findAll();
    //if successful return categoriesData as a json object and a 200 status
    res.status(200).json(categoriesData);
  } catch (err) {
    //catch for server error
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      // include products associated with that category
      include: [{ model: Product }]
    });
    //if not found, throw an error message with a 404 status
    if (!categoriesData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    //if successful return categoriesData as a json object and a 200 status
    res.status(200).json(categoriesData);
  } catch (err) {
    //catch for server error
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updatedCategory = await Category.update(
    {
      //update the category's name
      category_name: req.body.category_name,
    },
    {
      //at the id specified in the request url
      where: {
        id: req.params.id,
      },
    }
  );
  //return updated category json data
  res.json(updatedCategory);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
