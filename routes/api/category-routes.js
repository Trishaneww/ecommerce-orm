const router = require('express').Router();
const { Category, Product } = require('../../models');

// this will find all categories and include all its associated products
router.get('/', async (req, res) => {
  try {
    const userData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value and includes its associated products
router.get('/:id', async (req, res) => {
  try {
    const userData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err);
  }
});

// this will create a new category
router.post('/', async (req, res) => {
  try {
    const userData = await Category.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// this will delete a category by its given `id` 
router.delete('/:id', async (req, res) => {
  try {
    const userData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// this will update a category by its given `id` 
router.put('/:id', async (req, res) => {
  try {
    const userData = await Category.update({
      category_name: req.body.category_name
    },
      {
        where: {
          id: req.params.id
        }
      });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
