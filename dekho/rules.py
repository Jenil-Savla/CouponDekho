from python_simple_rules_engine import AbstractRule,  Evaluation
import datetime

class CouponRule(AbstractRule):
    def __init__(self, redemption_limit, expiry, active, used, applicable_to):
        self.redemption_limit = redemption_limit
        self.expiry = expiry
        self.active = active
        self.used = used
        self.applicable_to = applicable_to

    def evaluate(self,subject, *args):
        return  Evaluation({"stop":False, "result":((self.used < self.redemption_limit) & ( datetime.datetime.now(datetime.timezone.utc) <= self.expiry) & (self.active))})
    
class CartRule(AbstractRule):
    def __init__(self, skus,applicable_to):
        self.skus = skus
        self.applicable_to = applicable_to

    def evaluate(self, subject, *args):
        if self.applicable_to == 'overall_cart_amount':
            return  Evaluation({"stop":False,"result":True})
        for sku in self.skus:
            if sku in subject['skus']:
                return  Evaluation({"stop":False,"result":True})
        return Evaluation({"stop":False,"result":False})